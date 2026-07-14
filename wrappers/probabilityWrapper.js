
const Module = require('../wasm/probability.js');

let probability;


Module.onRuntimeInitialized = () =>{

    probability = {
    factorial:  Module.cwrap("factorial", "number", ["number"]),
    // permutation:  Module.cwrap("permutation", "number", ["number", "number"]),
    // combination:  Module.cwrap("combination", "number", ["number", "number"]),
    // binomial_probability:  Module.cwrap("binomial_probability", "number", ["number", "number"]),
    // poisson_probability:  Module.cwrap("poisson_probability", "number", ["number", "number"]),
    // normal_pdf:  Module.cwrap("normal_pdf", "number", ["number", "number"]),
    // normal_cdf:  Module.cwrap("normal_cdf", "number", ["number", "number"]),
    // bernoulli:  Module.cwrap("bernoulli", "number", ["number", "number"]),
    // geometric_probability:  Module.cwrap("geometric_probability", "number", ["number", "number"]),
    // hypergeometric_probability:  Module.cwrap("hypergeometric_probability", "number", ["number", "number"]),
    // exponential_pdf:  Module.cwrap("exponential_pdf", "number", ["number", "number"]),
    // exponential_cdf:  Module.cwrap("exponential_cdfexponential_cdf", "number", ["number", "number"]),
    // uniform_pdf:  Module.cwrap("uniform_pdf", "number", ["number", "number"]),
    // uniform_cdf:  Module.cwrap("uniform_cdf", "number", ["number", "number"]),
    // standard_normal_pdf:  Module.cwrap("standard_normal_pdf", "number", ["number", "number"]),
    // standard_normal_cdf:  Module.cwrap("standard_normal_cdf", "number", ["number", "number"]),
    // weibull_pdf:  Module.cwrap("weibull_pdf", "number", ["number", "number"]),
    // weibull_cdf:  Module.cwrap("weibull_cdf", "number", ["number", "number"]),
    // logistic_pdf:  Module.cwrap("logistic_pdf", "number", ["number", "number"]),
    // logistic_cdf:  Module.cwrap("logistic_cdf", "number", ["number", "number"]),
    // cauchy_pdf:  Module.cwrap("cauchy_pdf", "number", ["number", "number"]),
    // cauchy_cdf:  Module.cwrap("cauchy_cdf", "number", ["number", "number"]),
    // chi_square_pdf:  Module.cwrap("chi_square_pdf", "number", ["number", "number"]),
    // chi_square_cdf:  Module.cwrap("chi_square_cdf", "number", ["number", "number"]),
    // f_distribution_pdf:  Module.cwrap("f_distribution_pdf", "number", ["number", "number"]),
    // f_distribution_cdf:  Module.cwrap("f_distribution_cdf", "number", ["number", "number"]),
    }


}


