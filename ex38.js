function describe_city(city, country) {
    if (country === void 0) { country = "default country"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Tokyo", "Japan");
