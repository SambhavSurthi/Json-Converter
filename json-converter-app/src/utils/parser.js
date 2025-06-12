export const parseQuestions = (text, startId = 1) => {
  try {
    // Split the text into individual questions
    const questions = text.split(/(?=Q\d+\.)/).filter(q => q.trim());
    
    return questions.map((questionBlock, index) => {
      // Split the question into lines and remove empty lines
      const lines = questionBlock.split('\n').filter(line => line.trim());
      
      // Extract question text (everything until options start)
      let fullQuestionText = '';
      let i = 0; // Start from index 0 to include the first line
      while (i < lines.length && !lines[i].match(/^[A-E]\./)) {
        // Remove the question number prefix (e.g., "Q11.") from the first line
        if (i === 0) {
          fullQuestionText += lines[i].replace(/^Q\d+\.\s*/, '').trim() + ' ';
        } else {
          fullQuestionText += lines[i].trim() + ' ';
        }
        i++;
      }
      fullQuestionText = fullQuestionText.trim();
      
      // Extract options
      const options = [];
      while (i < lines.length && lines[i].match(/^[A-E]\./)) {
        options.push(lines[i].replace(/^[A-E]\.\s*/, '').trim());
        i++;
      }
      
      // Extract answer
      const answerLine = lines.find(line => line.startsWith('Answer:'));
      const answerLetters = answerLine ? answerLine.replace('Answer:', '').trim().split(' ') : [];
      const answers = answerLetters.map(letter => options[letter.charCodeAt(0) - 65]).filter(Boolean);
      
      return {
        id: startId + index,
        question: fullQuestionText,
        type: answers.length > 1 ? 'multi' : 'single',
        options,
        answer: answers.length > 1 ? answers : answers[0]
      };
    });
  } catch (error) {
    console.error('Error parsing questions:', error);
    return [];
  }
}; 