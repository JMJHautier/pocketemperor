-- Up

CREATE TABLE Quote (
  id INTEGER PRIMARY KEY,
  mentor STRING,
  text STRING
);

-- Down

DROP TABLE Message;
