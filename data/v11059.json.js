window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11059","name":"GSP_QTRAINPLANLIST","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW DBO.GSP_QTRAINPLANLIST\r\nAS\r\nSELECT DBO.GSP_QTRAINPLANB.ID, DBO.GSP_QTRAINPLANB.CID, \r\n      DBO.GSP_QTRAINPLANB.CMAKER, DBO.GSP_QTRAINPLANB.CVERIFIER, \r\n      DBO.GSP_QTRAINPLANB.CVOUCHTYPE, DBO.GSP_QTRAINPLANB.IVTID, \r\n      DBO.GSP_QTRAINPLANB.UFTS, DBO.GSP_QTRAINPLANT.CTIME, \r\n      DBO.GSP_QTRAINPLANT.CCONTENT, DBO.GSP_QTRAINPLANT.COBJECT, \r\n      DBO.GSP_QTRAINPLANT.CMODE, DBO.GSP_QTRAINPLANT.CPERSON, \r\n      DBO.GSP_QTRAINPLANT.AUTOID, DBO.GSP_QTRAINPLANB.CDEFINE1, \r\n      DBO.GSP_QTRAINPLANB.CDEFINE2, DBO.GSP_QTRAINPLANB.CDEFINE3, \r\n      DBO.GSP_QTRAINPLANB.CDEFINE4, DBO.GSP_QTRAINPLANB.CDEFINE5, \r\n      DBO.GSP_QTRAINPLANB.CDEFINE6, DBO.GSP_QTRAINPLANB.CDEFINE7, \r\n      DBO.GSP_QTRAINPLANB.CDEFINE8, DBO.GSP_QTRAINPLANB.CDEFINE9, \r\n      DBO.GSP_QTRAINPLANB.CDEFINE10, DBO.GSP_QTRAINPLANB.CDEFINE11, \r\n      DBO.GSP_QTRAINPLANB.CDEFINE12, DBO.GSP_QTRAINPLANB.CDEFINE13, \r\n      DBO.GSP_QTRAINPLANB.CDEFINE14, DBO.GSP_QTRAINPLANB.CDEFINE15, \r\n      DBO.GSP_QTRAINPLANB.CDEFINE16, DBO.GSP_QTRAINPLANT.CDEFINE22, \r\n      DBO.GSP_QTRAINPLANT.CDEFINE23, DBO.GSP_QTRAINPLANT.CDEFINE24, \r\n      DBO.GSP_QTRAINPLANT.CDEFINE25, DBO.GSP_QTRAINPLANT.CDEFINE26, \r\n      DBO.GSP_QTRAINPLANT.CDEFINE27, DBO.GSP_QTRAINPLANT.CDEFINE28, \r\n      DBO.GSP_QTRAINPLANT.CDEFINE29, DBO.GSP_QTRAINPLANT.CDEFINE30, \r\n      DBO.GSP_QTRAINPLANT.CDEFINE31, DBO.GSP_QTRAINPLANT.CDEFINE32, \r\n      DBO.GSP_QTRAINPLANT.CDEFINE33, DBO.GSP_QTRAINPLANT.CDEFINE34, \r\n      DBO.GSP_QTRAINPLANT.CDEFINE35, DBO.GSP_QTRAINPLANT.CDEFINE36, \r\n      DBO.GSP_QTRAINPLANT.CDEFINE37, DBO.GSP_QTRAINPLANB.IYEAR\r\nFROM DBO.GSP_QTRAINPLANB INNER JOIN\r\n      DBO.GSP_QTRAINPLANT ON DBO.GSP_QTRAINPLANB.ID = DBO.GSP_QTRAINPLANT.ID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"GSP_QTRAINPLANLIST"},{"field":"Type","value":"View"}],"columns":[{"id":"column-217116","object_id":"column-217116","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217117","object_id":"column-217117","name":"CID","name_without_path":"CID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217118","object_id":"column-217118","name":"CMAKER","name_without_path":"CMAKER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217119","object_id":"column-217119","name":"CVERIFIER","name_without_path":"CVERIFIER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217120","object_id":"column-217120","name":"CVOUCHTYPE","name_without_path":"CVOUCHTYPE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"3","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217121","object_id":"column-217121","name":"IVTID","name_without_path":"IVTID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217122","object_id":"column-217122","name":"UFTS","name_without_path":"UFTS","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217123","object_id":"column-217123","name":"CTIME","name_without_path":"CTIME","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217124","object_id":"column-217124","name":"CCONTENT","name_without_path":"CCONTENT","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217125","object_id":"column-217125","name":"COBJECT","name_without_path":"COBJECT","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217126","object_id":"column-217126","name":"CMODE","name_without_path":"CMODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217127","object_id":"column-217127","name":"CPERSON","name_without_path":"CPERSON","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217128","object_id":"column-217128","name":"AUTOID","name_without_path":"AUTOID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217129","object_id":"column-217129","name":"CDEFINE1","name_without_path":"CDEFINE1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217130","object_id":"column-217130","name":"CDEFINE2","name_without_path":"CDEFINE2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217131","object_id":"column-217131","name":"CDEFINE3","name_without_path":"CDEFINE3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217132","object_id":"column-217132","name":"CDEFINE4","name_without_path":"CDEFINE4","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217133","object_id":"column-217133","name":"CDEFINE5","name_without_path":"CDEFINE5","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217134","object_id":"column-217134","name":"CDEFINE6","name_without_path":"CDEFINE6","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217135","object_id":"column-217135","name":"CDEFINE7","name_without_path":"CDEFINE7","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217136","object_id":"column-217136","name":"CDEFINE8","name_without_path":"CDEFINE8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217137","object_id":"column-217137","name":"CDEFINE9","name_without_path":"CDEFINE9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217138","object_id":"column-217138","name":"CDEFINE10","name_without_path":"CDEFINE10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217139","object_id":"column-217139","name":"CDEFINE11","name_without_path":"CDEFINE11","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217140","object_id":"column-217140","name":"CDEFINE12","name_without_path":"CDEFINE12","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217141","object_id":"column-217141","name":"CDEFINE13","name_without_path":"CDEFINE13","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217142","object_id":"column-217142","name":"CDEFINE14","name_without_path":"CDEFINE14","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217143","object_id":"column-217143","name":"CDEFINE15","name_without_path":"CDEFINE15","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217144","object_id":"column-217144","name":"CDEFINE16","name_without_path":"CDEFINE16","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217145","object_id":"column-217145","name":"CDEFINE22","name_without_path":"CDEFINE22","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217146","object_id":"column-217146","name":"CDEFINE23","name_without_path":"CDEFINE23","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217147","object_id":"column-217147","name":"CDEFINE24","name_without_path":"CDEFINE24","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217148","object_id":"column-217148","name":"CDEFINE25","name_without_path":"CDEFINE25","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217149","object_id":"column-217149","name":"CDEFINE26","name_without_path":"CDEFINE26","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217150","object_id":"column-217150","name":"CDEFINE27","name_without_path":"CDEFINE27","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217151","object_id":"column-217151","name":"CDEFINE28","name_without_path":"CDEFINE28","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217152","object_id":"column-217152","name":"CDEFINE29","name_without_path":"CDEFINE29","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217153","object_id":"column-217153","name":"CDEFINE30","name_without_path":"CDEFINE30","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217154","object_id":"column-217154","name":"CDEFINE31","name_without_path":"CDEFINE31","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217155","object_id":"column-217155","name":"CDEFINE32","name_without_path":"CDEFINE32","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217156","object_id":"column-217156","name":"CDEFINE33","name_without_path":"CDEFINE33","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217157","object_id":"column-217157","name":"CDEFINE34","name_without_path":"CDEFINE34","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217158","object_id":"column-217158","name":"CDEFINE35","name_without_path":"CDEFINE35","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217159","object_id":"column-217159","name":"CDEFINE36","name_without_path":"CDEFINE36","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217160","object_id":"column-217160","name":"CDEFINE37","name_without_path":"CDEFINE37","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217161","object_id":"column-217161","name":"IYEAR","name_without_path":"IYEAR","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};