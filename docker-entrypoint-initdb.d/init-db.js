dbprod = db.getSiblingDB("showcompare-prod");

dbprod.createUser({
    user: "scompProd",
    pwd: "rqoKPi0Ept3",
    roles: [
      {
        role: 'readWrite', 
        db: 'showcompare-prod'
      },
    ],
  });

dbprod.createCollection("movie");
dbprod.createCollection("movieDetails");
dbprod.createCollection("show");
dbprod.createCollection("showEpisode");
dbprod.createCollection("watchlistEntry");

dbdev = db.getSiblingDB("showcompare-dev");

dbdev.createUser({
    user: "scompDev",
    pwd: "scompDev",
    roles: [
      {
        role: 'readWrite', 
        db: 'showcompare-dev'
      },
    ],
  });

dbdev.createCollection("movie");
dbdev.createCollection("movieDetails");
dbdev.createCollection("show");
dbdev.createCollection("showEpisode");
dbdev.createCollection("watchlistEntry");
