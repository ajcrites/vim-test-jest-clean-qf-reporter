class JestVimReporter {
  onTestResult(test, { testResults }) {
    console.log();
    testResults.forEach(test => {
      if ('failed' === test.status) {
        console.log(test.failureMessages[0].replace(/\n/g, ' ').replace(/.*?(?=Expected)(.*?)at .*?\((.*?)\).*/, '$1\n($2)').replace(/ +/g, ' '));
      }
    });
  }
}

module.exports = JestVimReporter;
