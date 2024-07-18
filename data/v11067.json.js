window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11067","name":"GSP_QVENLIST","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW DBO.GSP_QVENLIST\r\nAS  \r\nSELECT DBO.GSP_REGULARVEN.CDEPCODE, DBO.GSP_REGULARVEN.DDATE,   \r\n      DBO.GSP_REGULARVEN.CRVENNAME, DBO.GSP_REGULARVEN.CVENADDRESS,   \r\n      DBO.GSP_REGULARVEN.CVENLPERSON, DBO.GSP_REGULARVEN.CVENPHONE,   \r\n      DBO.GSP_REGULARVEN.CVENPOSTCODE, DBO.GSP_REGULARVEN.CSHOPCARD,   \r\n      DBO.GSP_REGULARVEN.CPERMIT, DBO.GSP_REGULARVEN.CVENCOND,   \r\n      DBO.GSP_REGULARVEN.CPROVALUE, DBO.GSP_REGULARVEN.CIMPORTHONOR,   \r\n      DBO.GSP_REGULARVEN.IPERSONNUMBER,   \r\n      DBO.GSP_REGULARVEN.CPRODUCTCOND,   \r\n      DBO.GSP_REGULARVEN.CIMPORTPRODUCT,   \r\n      DBO.GSP_REGULARVEN.CQUALITYCOND,   \r\n      DBO.GSP_REGULARVEN.CQUALITYASSURE,   \r\n      DBO.GSP_REGULARVEN.CQUALITYMACHINE,   \r\n      DBO.GSP_REGULARVEN.CATTESTATIONCOND,   \r\n      DBO.GSP_REGULARVEN.CVENQPERSON, DBO.GSP_REGULARVEN.CPERSONSEX,   \r\n      DBO.GSP_REGULARVEN.CPERSONDIPLOMA,   \r\n      DBO.GSP_REGULARVEN.CPERSONRANK,   \r\n      DBO.GSP_REGULARVEN.CTECHNICALLEVEL,   \r\n      DBO.GSP_REGULARVEN.CTECHNICALTIME,   \r\n      DBO.GSP_REGULARVEN.CGENERALVALUE, DBO.GSP_REGULARVEN.CMEMO,   \r\n      DBO.GSP_REGULARVEN.CMAKER, DBO.GSP_REGULARVEN.CVERIFIER,   \r\n      DBO.GSP_REGULARVEN.ID, DBO.GSP_REGULARVEN.CRVENCODE,   \r\n      DBO.GSP_REGULARVEN.CDEFINE1, DBO.GSP_REGULARVEN.CDEFINE10,   \r\n      DBO.GSP_REGULARVEN.CDEFINE2, DBO.GSP_REGULARVEN.CDEFINE3,   \r\n      DBO.GSP_REGULARVEN.CDEFINE4, DBO.GSP_REGULARVEN.CDEFINE5,   \r\n      DBO.GSP_REGULARVEN.CDEFINE6, DBO.GSP_REGULARVEN.CDEFINE7,   \r\n      DBO.GSP_REGULARVEN.CDEFINE8, DBO.GSP_REGULARVEN.CDEFINE9,   \r\n      DBO.GSP_REGULARVEN.CDEFINE11, DBO.GSP_REGULARVEN.CDEFINE12,   \r\n      DBO.GSP_REGULARVEN.CDEFINE13, DBO.GSP_REGULARVEN.CDEFINE14,   \r\n      DBO.GSP_REGULARVEN.CDEFINE15, DBO.GSP_REGULARVEN.CDEFINE16,   \r\n      DBO.GSP_REGULARVEN.IVTID, CONVERT(CHAR, CONVERT(MONEY,   \r\n      DBO.GSP_REGULARVEN.UFTS), 2) AS UFTS,   \r\n      DBO.GSP_REGULARVEN.CVOUCHTYPE, DBO.DEPARTMENT.CDEPNAME,   \r\n      DBO.GSP_REGULARVEN.CFREE1, DBO.GSP_REGULARVEN.CFREE2,   \r\n      DBO.GSP_REGULARVEN.CFREE3, DBO.GSP_REGULARVEN.CFREE4,   \r\n      DBO.GSP_REGULARVEN.CFREE5, DBO.GSP_REGULARVEN.CFREE6,   \r\n      DBO.GSP_REGULARVEN.CFREE7, DBO.GSP_REGULARVEN.CFREE8,   \r\n      DBO.GSP_REGULARVEN.CFREE9, DBO.GSP_REGULARVEN.CFREE10,   \r\n      DBO.GSP_REGULARVEN.CEAUDITCODE, DBO.GSP_REGULARVEN.CEAUDITID,   \r\n      DBO.GSP_REGULARVEN.BREFER, DBO.GSP_REGULARVEN.CMEASURE,   \r\n      DBO.GSP_REGULARVEN.CPRODUCTS  \r\nFROM DBO.GSP_REGULARVEN LEFT OUTER JOIN  \r\n      DBO.DEPARTMENT ON DBO.GSP_REGULARVEN.CDEPCODE = DBO.DEPARTMENT.CDEPCODE","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"GSP_QVENLIST"},{"field":"Type","value":"View"}],"columns":[{"id":"column-217686","object_id":"column-217686","name":"CDEPCODE","name_without_path":"CDEPCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217687","object_id":"column-217687","name":"DDATE","name_without_path":"DDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217688","object_id":"column-217688","name":"CRVENNAME","name_without_path":"CRVENNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217689","object_id":"column-217689","name":"CVENADDRESS","name_without_path":"CVENADDRESS","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217690","object_id":"column-217690","name":"CVENLPERSON","name_without_path":"CVENLPERSON","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217691","object_id":"column-217691","name":"CVENPHONE","name_without_path":"CVENPHONE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217692","object_id":"column-217692","name":"CVENPOSTCODE","name_without_path":"CVENPOSTCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217693","object_id":"column-217693","name":"CSHOPCARD","name_without_path":"CSHOPCARD","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217694","object_id":"column-217694","name":"CPERMIT","name_without_path":"CPERMIT","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217695","object_id":"column-217695","name":"CVENCOND","name_without_path":"CVENCOND","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217696","object_id":"column-217696","name":"CPROVALUE","name_without_path":"CPROVALUE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217697","object_id":"column-217697","name":"CIMPORTHONOR","name_without_path":"CIMPORTHONOR","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217698","object_id":"column-217698","name":"IPERSONNUMBER","name_without_path":"IPERSONNUMBER","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217699","object_id":"column-217699","name":"CPRODUCTCOND","name_without_path":"CPRODUCTCOND","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217700","object_id":"column-217700","name":"CIMPORTPRODUCT","name_without_path":"CIMPORTPRODUCT","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217701","object_id":"column-217701","name":"CQUALITYCOND","name_without_path":"CQUALITYCOND","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217702","object_id":"column-217702","name":"CQUALITYASSURE","name_without_path":"CQUALITYASSURE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217703","object_id":"column-217703","name":"CQUALITYMACHINE","name_without_path":"CQUALITYMACHINE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217704","object_id":"column-217704","name":"CATTESTATIONCOND","name_without_path":"CATTESTATIONCOND","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217705","object_id":"column-217705","name":"CVENQPERSON","name_without_path":"CVENQPERSON","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217706","object_id":"column-217706","name":"CPERSONSEX","name_without_path":"CPERSONSEX","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217707","object_id":"column-217707","name":"CPERSONDIPLOMA","name_without_path":"CPERSONDIPLOMA","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217708","object_id":"column-217708","name":"CPERSONRANK","name_without_path":"CPERSONRANK","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217709","object_id":"column-217709","name":"CTECHNICALLEVEL","name_without_path":"CTECHNICALLEVEL","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217710","object_id":"column-217710","name":"CTECHNICALTIME","name_without_path":"CTECHNICALTIME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217711","object_id":"column-217711","name":"CGENERALVALUE","name_without_path":"CGENERALVALUE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217712","object_id":"column-217712","name":"CMEMO","name_without_path":"CMEMO","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217713","object_id":"column-217713","name":"CMAKER","name_without_path":"CMAKER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217714","object_id":"column-217714","name":"CVERIFIER","name_without_path":"CVERIFIER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217715","object_id":"column-217715","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217716","object_id":"column-217716","name":"CRVENCODE","name_without_path":"CRVENCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217717","object_id":"column-217717","name":"CDEFINE1","name_without_path":"CDEFINE1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217718","object_id":"column-217718","name":"CDEFINE10","name_without_path":"CDEFINE10","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217719","object_id":"column-217719","name":"CDEFINE2","name_without_path":"CDEFINE2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217720","object_id":"column-217720","name":"CDEFINE3","name_without_path":"CDEFINE3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217721","object_id":"column-217721","name":"CDEFINE4","name_without_path":"CDEFINE4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217722","object_id":"column-217722","name":"CDEFINE5","name_without_path":"CDEFINE5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217723","object_id":"column-217723","name":"CDEFINE6","name_without_path":"CDEFINE6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217724","object_id":"column-217724","name":"CDEFINE7","name_without_path":"CDEFINE7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217725","object_id":"column-217725","name":"CDEFINE8","name_without_path":"CDEFINE8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217726","object_id":"column-217726","name":"CDEFINE9","name_without_path":"CDEFINE9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217727","object_id":"column-217727","name":"CDEFINE11","name_without_path":"CDEFINE11","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217728","object_id":"column-217728","name":"CDEFINE12","name_without_path":"CDEFINE12","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217729","object_id":"column-217729","name":"CDEFINE13","name_without_path":"CDEFINE13","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217730","object_id":"column-217730","name":"CDEFINE14","name_without_path":"CDEFINE14","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217731","object_id":"column-217731","name":"CDEFINE15","name_without_path":"CDEFINE15","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217732","object_id":"column-217732","name":"CDEFINE16","name_without_path":"CDEFINE16","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217733","object_id":"column-217733","name":"IVTID","name_without_path":"IVTID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217734","object_id":"column-217734","name":"UFTS","name_without_path":"UFTS","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217735","object_id":"column-217735","name":"CVOUCHTYPE","name_without_path":"CVOUCHTYPE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"3","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217736","object_id":"column-217736","name":"CDEPNAME","name_without_path":"CDEPNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217737","object_id":"column-217737","name":"CFREE1","name_without_path":"CFREE1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217738","object_id":"column-217738","name":"CFREE2","name_without_path":"CFREE2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217739","object_id":"column-217739","name":"CFREE3","name_without_path":"CFREE3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217740","object_id":"column-217740","name":"CFREE4","name_without_path":"CFREE4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217741","object_id":"column-217741","name":"CFREE5","name_without_path":"CFREE5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217742","object_id":"column-217742","name":"CFREE6","name_without_path":"CFREE6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217743","object_id":"column-217743","name":"CFREE7","name_without_path":"CFREE7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217744","object_id":"column-217744","name":"CFREE8","name_without_path":"CFREE8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217745","object_id":"column-217745","name":"CFREE9","name_without_path":"CFREE9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217746","object_id":"column-217746","name":"CFREE10","name_without_path":"CFREE10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217747","object_id":"column-217747","name":"CEAUDITCODE","name_without_path":"CEAUDITCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217748","object_id":"column-217748","name":"CEAUDITID","name_without_path":"CEAUDITID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217749","object_id":"column-217749","name":"BREFER","name_without_path":"BREFER","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217750","object_id":"column-217750","name":"CMEASURE","name_without_path":"CMEASURE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-217751","object_id":"column-217751","name":"CPRODUCTS","name_without_path":"CPRODUCTS","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};