
const Module = require('../wasm/probability.js');

let probability;


Module.onRuntimeInitialized = () =>{

    probability = {
    factorial:  Module.cwrap("factorial", "number", ["number"]),
    permutation:  Module.cwrap("permutation", "number", ["number", "number"]),
    combination:  Module.cwrap("combination", "number", ["number", "number"]),
    binomial_probability:  Module.cwrap("binomial_probability", "number", ["number", "number", "number"]),
    poisson_probability:  Module.cwrap("poisson_probability", "number", ["number", "number"]),
    normal_pdf:  Module.cwrap("normal_pdf", "number", ["number", "number", "number"]),
    normal_cdf:  Module.cwrap("normal_cdf", "number", ["number", "number", "number"]),
    bernoulli:  Module.cwrap("bernoulli", "number", ["number", "number"]),
    geometric_probability:  Module.cwrap("geometric_probability", "number", ["number", "number"]),
    hypergeometric_probability:  Module.cwrap("hypergeometric_probability", "number", ["number", "number", "number", "number"]),
    exponential_pdf:  Module.cwrap("exponential_pdf", "number", ["number", "number"]),
    exponential_cdf:  Module.cwrap("exponential_cdf", "number", ["number", "number"]),
    uniform_pdf:  Module.cwrap("uniform_pdf", "number", ["number", "number", "number"]),
    uniform_cdf:  Module.cwrap("uniform_cdf", "number", ["number", "number", "number"]),
    standard_normal_pdf:  Module.cwrap("standard_normal_pdf", "number", ["number"]),
    standard_normal_cdf:  Module.cwrap("standard_normal_cdf", "number", ["number"]),
    weibull_pdf:  Module.cwrap("weibull_pdf", "number", ["number", "number", "number"]),
    weibull_cdf:  Module.cwrap("weibull_cdf", "number", ["number", "number", "number"]),
    logistic_pdf:  Module.cwrap("logistic_pdf", "number", ["number", "number", "number"]),
    logistic_cdf:  Module.cwrap("logistic_cdf", "number", ["number", "number", "number"]),
    cauchy_pdf:  Module.cwrap("cauchy_pdf", "number", ["number", "number", "number"]),
    cauchy_cdf:  Module.cwrap("cauchy_cdf", "number", ["number", "number", "number"]),
    chi_square_pdf:  Module.cwrap("chi_square_pdf", "number", ["number", "number"]),
    chi_square_cdf:  Module.cwrap("chi_square_cdf", "number", ["number", "number"]),
    // f_distribution_pdf:  Module.cwrap("f_distribution_pdf", "number", ["number", "number"]),
    // f_distribution_cdf:  Module.cwrap("f_distribution_cdf", "number", ["number", "number"]),
    }


    // fast test
    console.log("factorial : ", factorial(3));
    console.log("permutation : ", permutation(10,3));
    console.log("combination : ", combination(5, 2));
    console.log("binomial_probability : ", binomial_probability(5, 3, 0.25));
    console.log("poisson_probability : ", poisson_probability(5, 3));
    console.log("normal_pdf : ", normal_pdf(100, 100, 15));
    console.log("normal_cdf : ", normal_cdf(115, 100, 15));
    console.log("bernoulli : ", bernoulli(1, 0.7));
    console.log("geometric_probability : ", geometric_probability(3, 0.5));
    console.log("hypergeometric_probability : ", hypergeometric_probability(52, 4, 5, 3));
    console.log("exponential_pdf : ", exponential_pdf(2, 0.5));
    console.log("exponential_cdf : ", exponential_cdf(2, 0.5));
    console.log("uniform_pdf : ", uniform_pdf(6, 2, 10));
    console.log("uniform_cdf : ", uniform_cdf(6, 2, 10));
    console.log("standard_normal_pdf : ", standard_normal_pdf(0));
    console.log("standard_normal_cdf : ", standard_normal_cdf(0));
    console.log("weibull_pdf : ", weibull_pdf(8, 2, 10));
    console.log("weibull_cdf : ", weibull_cdf(8, 2, 10));
    console.log("logistic_pdf : ", logistic_pdf(0, 0, 1));
    console.log("logistic_cdf", logistic_cdf(0, 0, 1));
    console.log("cauchy_pdf", cauchy_pdf(5, 0, 1));
    console.log("cauchy_cdf", cauchy_cdf(5, 0, 1));
}



// double factorial(int n);
// factorial
function factorial(n){
    return probability.factorial(n);
}

// double permutation(int n, int r);
// permutation(int n, int r)
function permutation(n, r){
    return probability.permutation(n, r);
}

// double combination(int n, int r);
// combination
function combination(n, r){
    return probability.combination(n, r);
}

// double binomial_probability(int n, int x, double p);
// binomial_probability
function binomial_probability(n, x, p){
    return probability.binomial_probability(n, x, p);
}

// double poisson_probability(int k, double lambda);
// poisson_probability
function poisson_probability(k, lambda){
    return probability.poisson_probability(k, lambda);
}

// double normal_pdf(double x, double mean, double stddev);
// normal_pdf
function normal_pdf(x, mean, stddev){
    return probability.normal_pdf(x, mean, stddev);
}

// double normal_cdf(double x, double mean, double stddev);
// normal_cdf
function normal_cdf(x, mean, stddev){
    return probability.normal_cdf(x, mean, stddev);
}

// double bernoulli(double x, double p);
// bernoulli
function bernoulli(x, p){
    return probability.bernoulli(x, p);
}

// double geometric_probability(int k, double p);
// geometric_probability
function geometric_probability(k, p){
    return probability.geometric_probability(k, p);
}

// double hypergeometric_probability(int N, int K, int n, int k);
// hypergeometric_probability
function hypergeometric_probability(N, K, n, k){
    return probability.hypergeometric_probability(N, K, n, k)
}

// double exponential_pdf(double x, double lambda);
// exponential_pdf
function exponential_pdf(x, lambda){
    return probability.exponential_pdf(x, lambda);
}

// double exponential_cdf(double x, double lambda);
// exponential_cdf
function exponential_cdf(x, lambda){
    return probability.exponential_cdf(x, lambda);
}

// double uniform_pdf(double x, double a, double b);
// uniform_pdf
function uniform_pdf(x, a, b){
    return probability.uniform_pdf(x, a, b);
}

// double uniform_cdf(double x, double a, double b);
// uniform_cdf
function uniform_cdf(x, a, b){
    return probability.uniform_cdf(x, a, b);
}

// double standard_normal_pdf(double z);
// standard_normal_pdf
function standard_normal_pdf(z){
    return probability.standard_normal_pdf(z);
}

// double standard_normal_cdf(double z);
// standard_normal_cdf
function standard_normal_cdf(z){
    return probability.standard_normal_cdf(z);
}

// double weibull_pdf(double x, double shape, double scale);
// weibull_pdf
function weibull_pdf(x, shape, scale){
    return probability.weibull_pdf(x, shape, scale);
}

// double weibull_cdf(double x, double shape, double scale);
// weibull_cdf
function weibull_cdf(x, shape, scale){
    return probability.weibull_cdf(x, shape, scale);
}

// double logistic_pdf(double x, double mean, double scale);
// logistic_pdf
function logistic_pdf(x, mean, scale){
    return probability.logistic_pdf(x, mean, scale);
}

// double logistic_cdf(double x, double mean, double scale);
// logistic_cdf(x, mean, scale)
function logistic_cdf(x, mean, scale){
    return probability.logistic_cdf(x, mean, scale);
}

// double cauchy_pdf(double x, double x0, double gamma);
// cauchy_pdf
function cauchy_pdf(x, x0, gamma){
    return probability.cauchy_pdf(x, x0, gamma);
}

// double cauchy_cdf(double x, double x0, double gamma);
// cauchy_cdf
function cauchy_cdf(x, x0, gamma){
    return probability.cauchy_cdf(x, x0, gamma);
}

// double chi_square_pdf(double x, int k);
// double chi_square_cdf(double x, int k);
// double f_distribution_pdf(double x, double d1, double d2);
// double f_distribution_cdf(double x, double d1, double d2);