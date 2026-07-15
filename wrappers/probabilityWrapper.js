
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
    // logistic_pdf:  Module.cwrap("logistic_pdf", "number", ["number", "number"]),
    // logistic_cdf:  Module.cwrap("logistic_cdf", "number", ["number", "number"]),
    // cauchy_pdf:  Module.cwrap("cauchy_pdf", "number", ["number", "number"]),
    // cauchy_cdf:  Module.cwrap("cauchy_cdf", "number", ["number", "number"]),
    // chi_square_pdf:  Module.cwrap("chi_square_pdf", "number", ["number", "number"]),
    // chi_square_cdf:  Module.cwrap("chi_square_cdf", "number", ["number", "number"]),
    // f_distribution_pdf:  Module.cwrap("f_distribution_pdf", "number", ["number", "number"]),
    // f_distribution_cdf:  Module.cwrap("f_distribution_cdf", "number", ["number", "number"]),
    }


    // fast test
    console.log("factorial : ",probability.factorial(3));
    console.log("permutation : ",probability.permutation(10,3));
    console.log("combination : ",probability.combination(5, 2));
    console.log("binomial_probability : ",probability.binomial_probability(5, 3, 0.25));
    console.log("poisson_probability : ", probability.poisson_probability(5, 3));
    console.log("normal_pdf : ", probability.normal_pdf(100, 100, 15));
    console.log("normal_cdf : ", probability.normal_cdf(115, 100, 15));
    console.log("bernoulli : ", probability.bernoulli(1, 0.7));
    console.log("geometric_probability : ", probability.geometric_probability(3, 0.5));
    console.log("hypergeometric_probability : ", probability.hypergeometric_probability(52, 4, 5, 3));
    console.log("exponential_pdf : ", probability.exponential_pdf(2, 0.5));
    console.log("exponential_cdf : ", probability.exponential_cdf(2, 0.5));
    console.log("uniform_pdf : ", probability.uniform_pdf(6, 2, 10));
    console.log("uniform_cdf : ", probability.uniform_cdf(6, 2, 10  ));
    console.log("standard_normal_pdf : ", probability.standard_normal_pdf(0));
    console.log("standard_normal_cdf : ", probability.standard_normal_cdf(0));
    console.log("weibull_pdf", probability.weibull_pdf(8, 2, 10));
    console.log("weibull_cdf", probability.weibull_cdf(8, 2, 10));

}


