class JestVimReporter {
  onTestResult(test, { testResults }) {
    console.log();
    testResults.forEach(test => {
      if (test.status !== 'failed') return;
      // note: I couldn't find out how to make a test generate more than one
      // failure message
      test.failureMessages.forEach(failureMessage => {
        const msg = failureMessage
          .replace(/\n/g, ' ')
          .replace(/.*?(?=Expected)(.*?)at .*?\((.*?)\).*/, '$1\n($2)')
          .replace(/.*?(?=Error)(.*?)at .*?\((.*?)\).*/, '$1\n($2)')
          .replace(/ +/g, ' ')
          .trim();

        const lines = msg.split('\n');
        if (lines.length !== 2) {
          console.error(
            'vim-test-jest-clean-qf-reporter: could not parse error.'
          );
          console.error(
            'Report the issue here: https://github.com/ajcrites/vim-test-jest-clean-qf-reporter/issues'
          );
          console.error(test.failureMessages[0]);
        } else {
          const [line1, line2] = lines;
          const msg = line1.trim();
          // const location = line2.replace(/^[ ]*\(/, '').replace(/\)[ ]*/, '');
          const location = line2;
          console.log(msg);
          console.log(location);
        }
      });
    });
  }
}

module.exports = JestVimReporter;
