import Log from "../logger/Log";

export default class NewsUtil {
  // static splitLivetitleNews: any;
  // static getMatchScore: any;

  public static  getMatchScore(NewsSource1: string, NewsSource2: string){
    const words1 =  NewsSource1.toLowerCase().replace(/[^\w\s]/g, "").split(" ");
    const words2 =   NewsSource2.toLowerCase().replace(/[^\w\s]/g, "").split(" ");
    
    // Count the number of words that match
    let matchCount = 0;
    words1.forEach((word1) => {
      words2.forEach((word2) => {
        if (word1 === word2) {
          matchCount++;
        }
      });
    });
    
    // Calculate the percentage of words that match
    const totalWords =  words1.length + words2.length;
    const matchPercentage =  (matchCount / totalWords) * 100;
    
    Log.info(`Number of words that match: ${matchCount}`);
    Log.info(`Percentage of words that match: ${matchPercentage.toFixed(2)}%`);
    return matchPercentage;
 }

 public static splitLivetitleNews(value: String){
    let partAfterColon;
    if (value.toLowerCase().includes("live") && value.includes(":") ) {
        
        Log.info("The string contains 'Live'");
      // Split the string with a colon and trim the whitespace
      const parts = value.split(":").map((part) => part.trim());
      partAfterColon= parts[1]; 
      Log.info(partAfterColon); 
      } else {
        Log.info("The string does not contain 'Live'");
        partAfterColon=value;
      }   
      return partAfterColon;
 }
}
