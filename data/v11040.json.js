window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11040","name":"GSP_QQREGISTERT","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW DBO.GSP_QQREGISTERT\r\nAS\r\nSELECT DBO.GSP_VOUCHSREGISTER.AUTOID, DBO.GSP_VOUCHSREGISTER.ID, \r\n      DBO.GSP_VOUCHSREGISTER.SEQ, DBO.GSP_VOUCHSREGISTER.DDATE_T, \r\n      DBO.GSP_VOUCHSREGISTER.CVENCODE, DBO.GSP_VOUCHSREGISTER.DVDATE, \r\n      DBO.GSP_VOUCHSREGISTER.CINVCODE, DBO.INVENTORY.CINVNAME, \r\n      DBO.INVENTORY.CINVSTD, DBO.INVENTORY.CENTERPRISE, DBO.GSP_VOUCHSREGISTER.FQTY, \r\n      DBO.GSP_VOUCHSREGISTER.FSUM, DBO.GSP_VOUCHSREGISTER.CBATCH, \r\n      DBO.GSP_VOUCHSREGISTER.CREASON, DBO.GSP_VOUCHSREGISTER.CRESULT_T, \r\n      DBO.GSP_VOUCHSREGISTER.CMEMO, DBO.GSP_VOUCHSREGISTER.CFREE1, \r\n      DBO.GSP_VOUCHSREGISTER.CFREE2, DBO.GSP_VOUCHSREGISTER.CFREE3, \r\n      DBO.GSP_VOUCHSREGISTER.CFREE4, DBO.GSP_VOUCHSREGISTER.CFREE5, \r\n      DBO.GSP_VOUCHSREGISTER.CFREE6, DBO.GSP_VOUCHSREGISTER.CFREE7, \r\n      DBO.GSP_VOUCHSREGISTER.CFREE8, DBO.GSP_VOUCHSREGISTER.CFREE9, \r\n      DBO.GSP_VOUCHSREGISTER.CFREE10, DBO.COMPUTATIONUNIT.CCOMUNITNAME, \r\n      DBO.INVENTORY.CCOMUNITCODE, DBO.INVENTORY.CADDRESS, DBO.INVENTORY.CCURRENCYNAME, \r\n      DBO.INVENTORY.CPREPARATIONTYPE, DBO.INVENTORY.CPACKINGTYPE, \r\n      DBO.GSP_VOUCHSREGISTER.CUNITID, COM1.CCOMUNITNAME AS CCOMUNITNAMES, \r\n      COM1.ICHANGRATE, DBO.GSP_VOUCHSREGISTER.FQTYS, \r\n      DBO.GSP_VOUCHSREGISTER.BFLAG, DBO.GSP_VOUCHSREGISTER.CDEFINE22, \r\n      DBO.GSP_VOUCHSREGISTER.CDEFINE23, DBO.GSP_VOUCHSREGISTER.CDEFINE24, \r\n      DBO.GSP_VOUCHSREGISTER.CDEFINE25, DBO.GSP_VOUCHSREGISTER.CDEFINE26, \r\n      DBO.GSP_VOUCHSREGISTER.CDEFINE27, DBO.GSP_VOUCHSREGISTER.CDEFINE28, \r\n      DBO.GSP_VOUCHSREGISTER.CDEFINE29, DBO.GSP_VOUCHSREGISTER.CDEFINE30, \r\n      DBO.GSP_VOUCHSREGISTER.CDEFINE31, DBO.GSP_VOUCHSREGISTER.CDEFINE32, \r\n      DBO.GSP_VOUCHSREGISTER.CDEFINE33, DBO.GSP_VOUCHSREGISTER.CDEFINE34, \r\n      DBO.GSP_VOUCHSREGISTER.CDEFINE35, DBO.GSP_VOUCHSREGISTER.CDEFINE36, \r\n      DBO.GSP_VOUCHSREGISTER.CDEFINE37\r\nFROM DBO.GSP_VOUCHSREGISTER INNER JOIN\r\n      DBO.INVENTORY ON \r\n      DBO.GSP_VOUCHSREGISTER.CINVCODE = DBO.INVENTORY.CINVCODE LEFT OUTER JOIN\r\n      DBO.COMPUTATIONUNIT ON \r\n      DBO.INVENTORY.CCOMUNITCODE = DBO.COMPUTATIONUNIT.CCOMUNITCODE LEFT OUTER JOIN\r\n      DBO.COMPUTATIONUNIT COM1 ON \r\n      DBO.GSP_VOUCHSREGISTER.CUNITID = COM1.CCOMUNITCODE","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"GSP_QQREGISTERT"},{"field":"Type","value":"View"}],"columns":[{"id":"column-215936","object_id":"column-215936","name":"AUTOID","name_without_path":"AUTOID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215937","object_id":"column-215937","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215938","object_id":"column-215938","name":"SEQ","name_without_path":"SEQ","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215939","object_id":"column-215939","name":"DDATE_T","name_without_path":"DDATE_T","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215940","object_id":"column-215940","name":"CVENCODE","name_without_path":"CVENCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215941","object_id":"column-215941","name":"DVDATE","name_without_path":"DVDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215942","object_id":"column-215942","name":"CINVCODE","name_without_path":"CINVCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215943","object_id":"column-215943","name":"CINVNAME","name_without_path":"CINVNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215944","object_id":"column-215944","name":"CINVSTD","name_without_path":"CINVSTD","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215945","object_id":"column-215945","name":"CENTERPRISE","name_without_path":"CENTERPRISE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215946","object_id":"column-215946","name":"FQTY","name_without_path":"FQTY","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215947","object_id":"column-215947","name":"FSUM","name_without_path":"FSUM","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215948","object_id":"column-215948","name":"CBATCH","name_without_path":"CBATCH","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215949","object_id":"column-215949","name":"CREASON","name_without_path":"CREASON","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215950","object_id":"column-215950","name":"CRESULT_T","name_without_path":"CRESULT_T","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215951","object_id":"column-215951","name":"CMEMO","name_without_path":"CMEMO","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215952","object_id":"column-215952","name":"CFREE1","name_without_path":"CFREE1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215953","object_id":"column-215953","name":"CFREE2","name_without_path":"CFREE2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215954","object_id":"column-215954","name":"CFREE3","name_without_path":"CFREE3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215955","object_id":"column-215955","name":"CFREE4","name_without_path":"CFREE4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215956","object_id":"column-215956","name":"CFREE5","name_without_path":"CFREE5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215957","object_id":"column-215957","name":"CFREE6","name_without_path":"CFREE6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215958","object_id":"column-215958","name":"CFREE7","name_without_path":"CFREE7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215959","object_id":"column-215959","name":"CFREE8","name_without_path":"CFREE8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215960","object_id":"column-215960","name":"CFREE9","name_without_path":"CFREE9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215961","object_id":"column-215961","name":"CFREE10","name_without_path":"CFREE10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215962","object_id":"column-215962","name":"CCOMUNITNAME","name_without_path":"CCOMUNITNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215963","object_id":"column-215963","name":"CCOMUNITCODE","name_without_path":"CCOMUNITCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215964","object_id":"column-215964","name":"CADDRESS","name_without_path":"CADDRESS","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215965","object_id":"column-215965","name":"CCURRENCYNAME","name_without_path":"CCURRENCYNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215966","object_id":"column-215966","name":"CPREPARATIONTYPE","name_without_path":"CPREPARATIONTYPE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215967","object_id":"column-215967","name":"CPACKINGTYPE","name_without_path":"CPACKINGTYPE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215968","object_id":"column-215968","name":"CUNITID","name_without_path":"CUNITID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215969","object_id":"column-215969","name":"CCOMUNITNAMES","name_without_path":"CCOMUNITNAMES","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215970","object_id":"column-215970","name":"ICHANGRATE","name_without_path":"ICHANGRATE","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215971","object_id":"column-215971","name":"FQTYS","name_without_path":"FQTYS","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215972","object_id":"column-215972","name":"BFLAG","name_without_path":"BFLAG","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215973","object_id":"column-215973","name":"CDEFINE22","name_without_path":"CDEFINE22","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215974","object_id":"column-215974","name":"CDEFINE23","name_without_path":"CDEFINE23","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215975","object_id":"column-215975","name":"CDEFINE24","name_without_path":"CDEFINE24","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215976","object_id":"column-215976","name":"CDEFINE25","name_without_path":"CDEFINE25","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215977","object_id":"column-215977","name":"CDEFINE26","name_without_path":"CDEFINE26","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215978","object_id":"column-215978","name":"CDEFINE27","name_without_path":"CDEFINE27","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215979","object_id":"column-215979","name":"CDEFINE28","name_without_path":"CDEFINE28","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215980","object_id":"column-215980","name":"CDEFINE29","name_without_path":"CDEFINE29","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215981","object_id":"column-215981","name":"CDEFINE30","name_without_path":"CDEFINE30","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215982","object_id":"column-215982","name":"CDEFINE31","name_without_path":"CDEFINE31","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215983","object_id":"column-215983","name":"CDEFINE32","name_without_path":"CDEFINE32","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215984","object_id":"column-215984","name":"CDEFINE33","name_without_path":"CDEFINE33","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215985","object_id":"column-215985","name":"CDEFINE34","name_without_path":"CDEFINE34","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215986","object_id":"column-215986","name":"CDEFINE35","name_without_path":"CDEFINE35","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215987","object_id":"column-215987","name":"CDEFINE36","name_without_path":"CDEFINE36","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-215988","object_id":"column-215988","name":"CDEFINE37","name_without_path":"CDEFINE37","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};