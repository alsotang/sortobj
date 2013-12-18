test:
	mocha
test-cov:
	mocha -r blanket -R html-cov > coverage.html

.PHONY: test test-cov