export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "ravin";
  }

  if (query.toLowerCase().includes("age")) {
    return "67";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "ravink";
  }

  if (query.toLowerCase().includes("largest")) {
    var a = query.substring(47, query.length).split(", ");
    return (a.map( function (x) { return parseInt(x); }).reduce( function (x, y) { if (x >= y) {return x;} else {return y;} }, 0)).toString();
  }

  if (query.toLowerCase().includes("plus")) {
    var a = query.substring(8, query.length).split(" and ");
    return (a.map( function (x) { return parseInt(x); }).reduce( function (x, y) { return x + y; }, 0)).toString();
  }

  return "";
}
