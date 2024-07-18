window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12028","name":"QM_QPERREJECTT","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].[QM_QPERREJECTT]  \r\nAS  \r\nSELECT  \r\n  DBO.QMREJECTVOUCHERS.ID, DBO.QMREJECTVOUCHERS.AUTOID,    \r\n  DBO.QMREJECTVOUCHERS.CREASONCODE, DBO.REASON.CREASONNAME,    \r\n  DBO.QMREJECTVOUCHERS.FQUANTITY, DBO.QMREJECTVOUCHERS.FNUM,    \r\n  DBO.QMREJECTVOUCHERS.CSCRAPDISCODE,    \r\n  DBO.QMSCRAPDISPOSE.CSCRAPDISNAME,    \r\n  DBO.QMREJECTVOUCHERS.IDISPOSEFLOW AS IDISPOSEFLOW,  \r\n  DBO.QMREJECTVOUCHERS.CDIMINVCODE,    \r\n  DBO.INVENTORY.IID AS DIMIID,    \r\n  DBO.INVENTORY.CINVADDCODE AS CDIMINVADDCODE,    \r\n  DBO.INVENTORY.CINVNAME AS CDIMINVNAME,    \r\n  DBO.INVENTORY.CINVSTD AS CDIMINVSTD,    \r\n  DBO.INVENTORY.CCOMUNITCODE AS CDIMCOMUNITCODE,    \r\n  COMPUTATIONUNIT_1.CCOMUNITNAME AS CDIMCOMUNITNAME,    \r\n  DBO.QMREJECTVOUCHERS.CDIMUNITID,    \r\n  COMPUTATIONUNIT.CCOMUNITNAME AS CDIMUNITNAME,    \r\n  DBO.QMREJECTVOUCHERS.FDIMCHANGRATE,    \r\n  DBO.QMREJECTVOUCHERS.FDIMQUANTITY, DBO.QMREJECTVOUCHERS.FDIMNUM,    \r\n  DBO.QMREJECTVOUCHERS.CFREE1, DBO.QMREJECTVOUCHERS.CFREE2,    \r\n  DBO.QMREJECTVOUCHERS.CFREE3, DBO.QMREJECTVOUCHERS.CFREE4,    \r\n  DBO.QMREJECTVOUCHERS.CFREE5, DBO.QMREJECTVOUCHERS.CFREE6,    \r\n  DBO.QMREJECTVOUCHERS.CFREE7, DBO.QMREJECTVOUCHERS.CFREE8,    \r\n  DBO.QMREJECTVOUCHERS.CFREE9, DBO.QMREJECTVOUCHERS.CFREE10,    \r\n  DBO.QMREJECTVOUCHERS.CDEPCODE, DBO.DEPARTMENT.CDEPNAME,    \r\n  DBO.QMREJECTVOUCHERS.CDEFINE22, DBO.QMREJECTVOUCHERS.CDEFINE23,    \r\n  DBO.QMREJECTVOUCHERS.CDEFINE24, DBO.QMREJECTVOUCHERS.CDEFINE25,    \r\n  DBO.QMREJECTVOUCHERS.CDEFINE26, DBO.QMREJECTVOUCHERS.CDEFINE27,    \r\n  DBO.QMREJECTVOUCHERS.CDEFINE28, DBO.QMREJECTVOUCHERS.CDEFINE29,    \r\n  DBO.QMREJECTVOUCHERS.CDEFINE30, DBO.QMREJECTVOUCHERS.CDEFINE31,    \r\n  DBO.QMREJECTVOUCHERS.CDEFINE32, DBO.QMREJECTVOUCHERS.CDEFINE33,    \r\n  DBO.QMREJECTVOUCHERS.CDEFINE34, DBO.QMREJECTVOUCHERS.CDEFINE35,    \r\n  DBO.QMREJECTVOUCHERS.CDEFINE36, DBO.QMREJECTVOUCHERS.CDEFINE37,    \r\n  DBO.QMREJECTVOUCHERS.BFLAG AS BFLAG,  \r\n  DBO.QMREJECTVOUCHERS.BSTNEXTYEAR AS BSTNEXTYEAR,  \r\n  DBO.INVENTORY.CINVDEFINE1, DBO.INVENTORY.CINVDEFINE2,    \r\n  DBO.INVENTORY.CINVDEFINE3, DBO.INVENTORY.CINVDEFINE4,    \r\n  DBO.INVENTORY.CINVDEFINE5, DBO.INVENTORY.CINVDEFINE6,    \r\n  DBO.INVENTORY.CINVDEFINE7, DBO.INVENTORY.CINVDEFINE8,    \r\n  DBO.INVENTORY.CINVDEFINE9, DBO.INVENTORY.CINVDEFINE10,    \r\n  DBO.INVENTORY.CINVDEFINE11, DBO.INVENTORY.CINVDEFINE12,    \r\n  DBO.INVENTORY.CINVDEFINE13, DBO.INVENTORY.CINVDEFINE14,    \r\n  DBO.INVENTORY.CINVDEFINE15, DBO.INVENTORY.CINVDEFINE16,    \r\n  DBO.QMREJECTVOUCHERS.FMATCOST,DBO.QMREJECTVOUCHERS.FBADLOSE,    \r\n  DBO.QMREJECTVOUCHERS.CDIMBATCH,DBO.QMREJECTVOUCHERS.DDIMVDATE,    \r\n  DBO.QMREJECTVOUCHERS.IDIMMASSDATE,DBO.QMREJECTVOUCHERS.CDIMMASSUNIT,\r\n  DBO.QMREJECTVOUCHERS.FSUMREWORKQTY,DBO.QMREJECTVOUCHERS.FSUMREWORKNUM,\r\n  DBO.QMREJECTVOUCHERS.IDIMEXPIRATDATECALCU,DBO.QMREJECTVOUCHERS.CDIMEXPIRATIONDATE,DBO.QMREJECTVOUCHERS.DDIMEXPIRATIONDATE,--872-add-有效期至相关\r\n  DBO.QMREJECTVOUCHERS.CBWHCODE,DBO.WAREHOUSE.CWHNAME as CBWHNAME,--890-add-表体仓库编码、名称\r\n  DBO.QMREJECTVOUCHERS.CPUPOCODE,DBO.QMREJECTVOUCHERS.IPUPODID,\r\n  DBO.INVENTORY.IGROUPTYPE,DBO.QMREJECTVOUCHERS.CBVENCODE,VENDOR.CVENNAME AS CBVENNAME,VENDOR.CVENABBNAME AS CBVENABBNAME,\r\n  QMREJECTVOUCHERS.CBSYSBARCODE --11.0 add    \r\nFROM DBO.QMREJECTVOUCHERS   \r\n LEFT OUTER JOIN INVENTORY ON DBO.QMREJECTVOUCHERS.CDIMINVCODE = DBO.INVENTORY.CINVCODE   \r\n LEFT OUTER JOIN DBO.DEPARTMENT ON DBO.QMREJECTVOUCHERS.CDEPCODE = DBO.DEPARTMENT.CDEPCODE   \r\n LEFT OUTER JOIN DBO.COMPUTATIONUNIT COMPUTATIONUNIT ON DBO.QMREJECTVOUCHERS.CDIMUNITID = COMPUTATIONUNIT.CCOMUNITCODE   \r\n LEFT OUTER JOIN DBO.COMPUTATIONUNIT COMPUTATIONUNIT_1 ON COMPUTATIONUNIT_1.CCOMUNITCODE = DBO.INVENTORY.CCOMUNITCODE   \r\n LEFT OUTER JOIN DBO.QMSCRAPDISPOSE ON DBO.QMREJECTVOUCHERS.CSCRAPDISCODE = DBO.QMSCRAPDISPOSE.CSCRAPDISCODE  \r\n LEFT OUTER JOIN DBO.REASON ON DBO.QMREJECTVOUCHERS.CREASONCODE = DBO.REASON.CREASONCODE  \r\n LEFT JOIN VENDOR ON VENDOR.CVENCODE=QMREJECTVOUCHERS.CBVENCODE\r\n LEFT OUTER JOIN DBO.WAREHOUSE ON DBO.QMREJECTVOUCHERS.CBWHCODE = DBO.WAREHOUSE.CWHCODE","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"QM_QPERREJECTT"},{"field":"Type","value":"View"}],"columns":[{"id":"column-271407","object_id":"column-271407","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271408","object_id":"column-271408","name":"AUTOID","name_without_path":"AUTOID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271409","object_id":"column-271409","name":"CREASONCODE","name_without_path":"CREASONCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271410","object_id":"column-271410","name":"CREASONNAME","name_without_path":"CREASONNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271411","object_id":"column-271411","name":"FQUANTITY","name_without_path":"FQUANTITY","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271412","object_id":"column-271412","name":"FNUM","name_without_path":"FNUM","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271413","object_id":"column-271413","name":"CSCRAPDISCODE","name_without_path":"CSCRAPDISCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271414","object_id":"column-271414","name":"CSCRAPDISNAME","name_without_path":"CSCRAPDISNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271415","object_id":"column-271415","name":"IDISPOSEFLOW","name_without_path":"IDISPOSEFLOW","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271416","object_id":"column-271416","name":"CDIMINVCODE","name_without_path":"CDIMINVCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271417","object_id":"column-271417","name":"DIMIID","name_without_path":"DIMIID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271418","object_id":"column-271418","name":"CDIMINVADDCODE","name_without_path":"CDIMINVADDCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271419","object_id":"column-271419","name":"CDIMINVNAME","name_without_path":"CDIMINVNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271420","object_id":"column-271420","name":"CDIMINVSTD","name_without_path":"CDIMINVSTD","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271421","object_id":"column-271421","name":"CDIMCOMUNITCODE","name_without_path":"CDIMCOMUNITCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271422","object_id":"column-271422","name":"CDIMCOMUNITNAME","name_without_path":"CDIMCOMUNITNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271423","object_id":"column-271423","name":"CDIMUNITID","name_without_path":"CDIMUNITID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271424","object_id":"column-271424","name":"CDIMUNITNAME","name_without_path":"CDIMUNITNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271493","object_id":"column-271493","name":"FDIMCHANGRATE","name_without_path":"FDIMCHANGRATE","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271425","object_id":"column-271425","name":"FDIMQUANTITY","name_without_path":"FDIMQUANTITY","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271426","object_id":"column-271426","name":"FDIMNUM","name_without_path":"FDIMNUM","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271427","object_id":"column-271427","name":"CFREE1","name_without_path":"CFREE1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271428","object_id":"column-271428","name":"CFREE2","name_without_path":"CFREE2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271429","object_id":"column-271429","name":"CFREE3","name_without_path":"CFREE3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271430","object_id":"column-271430","name":"CFREE4","name_without_path":"CFREE4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271431","object_id":"column-271431","name":"CFREE5","name_without_path":"CFREE5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271432","object_id":"column-271432","name":"CFREE6","name_without_path":"CFREE6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271433","object_id":"column-271433","name":"CFREE7","name_without_path":"CFREE7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271434","object_id":"column-271434","name":"CFREE8","name_without_path":"CFREE8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271435","object_id":"column-271435","name":"CFREE9","name_without_path":"CFREE9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271436","object_id":"column-271436","name":"CFREE10","name_without_path":"CFREE10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271437","object_id":"column-271437","name":"CDEPCODE","name_without_path":"CDEPCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271438","object_id":"column-271438","name":"CDEPNAME","name_without_path":"CDEPNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271439","object_id":"column-271439","name":"CDEFINE22","name_without_path":"CDEFINE22","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271440","object_id":"column-271440","name":"CDEFINE23","name_without_path":"CDEFINE23","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271441","object_id":"column-271441","name":"CDEFINE24","name_without_path":"CDEFINE24","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271442","object_id":"column-271442","name":"CDEFINE25","name_without_path":"CDEFINE25","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271443","object_id":"column-271443","name":"CDEFINE26","name_without_path":"CDEFINE26","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271444","object_id":"column-271444","name":"CDEFINE27","name_without_path":"CDEFINE27","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271445","object_id":"column-271445","name":"CDEFINE28","name_without_path":"CDEFINE28","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271446","object_id":"column-271446","name":"CDEFINE29","name_without_path":"CDEFINE29","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271447","object_id":"column-271447","name":"CDEFINE30","name_without_path":"CDEFINE30","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271448","object_id":"column-271448","name":"CDEFINE31","name_without_path":"CDEFINE31","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271449","object_id":"column-271449","name":"CDEFINE32","name_without_path":"CDEFINE32","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271450","object_id":"column-271450","name":"CDEFINE33","name_without_path":"CDEFINE33","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271451","object_id":"column-271451","name":"CDEFINE34","name_without_path":"CDEFINE34","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271452","object_id":"column-271452","name":"CDEFINE35","name_without_path":"CDEFINE35","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271453","object_id":"column-271453","name":"CDEFINE36","name_without_path":"CDEFINE36","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271454","object_id":"column-271454","name":"CDEFINE37","name_without_path":"CDEFINE37","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271455","object_id":"column-271455","name":"BFLAG","name_without_path":"BFLAG","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271456","object_id":"column-271456","name":"BSTNEXTYEAR","name_without_path":"BSTNEXTYEAR","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271457","object_id":"column-271457","name":"CINVDEFINE1","name_without_path":"CINVDEFINE1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271458","object_id":"column-271458","name":"CINVDEFINE2","name_without_path":"CINVDEFINE2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271459","object_id":"column-271459","name":"CINVDEFINE3","name_without_path":"CINVDEFINE3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271460","object_id":"column-271460","name":"CINVDEFINE4","name_without_path":"CINVDEFINE4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271461","object_id":"column-271461","name":"CINVDEFINE5","name_without_path":"CINVDEFINE5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271462","object_id":"column-271462","name":"CINVDEFINE6","name_without_path":"CINVDEFINE6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271463","object_id":"column-271463","name":"CINVDEFINE7","name_without_path":"CINVDEFINE7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271464","object_id":"column-271464","name":"CINVDEFINE8","name_without_path":"CINVDEFINE8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271465","object_id":"column-271465","name":"CINVDEFINE9","name_without_path":"CINVDEFINE9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271466","object_id":"column-271466","name":"CINVDEFINE10","name_without_path":"CINVDEFINE10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271467","object_id":"column-271467","name":"CINVDEFINE11","name_without_path":"CINVDEFINE11","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271468","object_id":"column-271468","name":"CINVDEFINE12","name_without_path":"CINVDEFINE12","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271469","object_id":"column-271469","name":"CINVDEFINE13","name_without_path":"CINVDEFINE13","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271470","object_id":"column-271470","name":"CINVDEFINE14","name_without_path":"CINVDEFINE14","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271471","object_id":"column-271471","name":"CINVDEFINE15","name_without_path":"CINVDEFINE15","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271472","object_id":"column-271472","name":"CINVDEFINE16","name_without_path":"CINVDEFINE16","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271473","object_id":"column-271473","name":"FMATCOST","name_without_path":"FMATCOST","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271474","object_id":"column-271474","name":"FBADLOSE","name_without_path":"FBADLOSE","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271475","object_id":"column-271475","name":"CDIMBATCH","name_without_path":"CDIMBATCH","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271476","object_id":"column-271476","name":"DDIMVDATE","name_without_path":"DDIMVDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271477","object_id":"column-271477","name":"IDIMMASSDATE","name_without_path":"IDIMMASSDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271478","object_id":"column-271478","name":"CDIMMASSUNIT","name_without_path":"CDIMMASSUNIT","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271479","object_id":"column-271479","name":"FSUMREWORKQTY","name_without_path":"FSUMREWORKQTY","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271480","object_id":"column-271480","name":"FSUMREWORKNUM","name_without_path":"FSUMREWORKNUM","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271481","object_id":"column-271481","name":"IDIMEXPIRATDATECALCU","name_without_path":"IDIMEXPIRATDATECALCU","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271482","object_id":"column-271482","name":"CDIMEXPIRATIONDATE","name_without_path":"CDIMEXPIRATIONDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271483","object_id":"column-271483","name":"DDIMEXPIRATIONDATE","name_without_path":"DDIMEXPIRATIONDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271484","object_id":"column-271484","name":"CBWHCODE","name_without_path":"CBWHCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271485","object_id":"column-271485","name":"CBWHNAME","name_without_path":"CBWHNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271486","object_id":"column-271486","name":"CPUPOCODE","name_without_path":"CPUPOCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271487","object_id":"column-271487","name":"IPUPODID","name_without_path":"IPUPODID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271488","object_id":"column-271488","name":"IGROUPTYPE","name_without_path":"IGROUPTYPE","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271489","object_id":"column-271489","name":"CBVENCODE","name_without_path":"CBVENCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271490","object_id":"column-271490","name":"CBVENNAME","name_without_path":"CBVENNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271491","object_id":"column-271491","name":"CBVENABBNAME","name_without_path":"CBVENABBNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-271492","object_id":"column-271492","name":"CBSYSBARCODE","name_without_path":"CBSYSBARCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"80","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};