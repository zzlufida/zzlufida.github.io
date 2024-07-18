window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14105","name":"VFM_CrBill","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.VFM_CrBill\r\nAS\r\nSELECT dbo.FM_CrBill.autoID AS autoid, dbo.FM_CrBill.strCrBillID AS strcrbillid, \r\n      dbo.FM_CrBill.bStatus AS bstatus, dbo.FM_CrBill.bType AS btype, \r\n      dbo.FM_CrBill.dtDate AS dtdate, dbo.FM_CrBill.strUnitCode AS strunitcode, \r\n      dbo.FM_CrBill.dblInvest AS dblinvest, convert(nvarchar(100),'') as jedx, dbo.FM_CrBill.dblCash AS dblcash, \r\n      dbo.FM_CrBill.strExchName AS strexchname, dbo.FM_CrBill.nflat AS nflat, \r\n      dbo.FM_CrBill.dblNatural AS dblnatural, dbo.FM_CrBill.strGatherAcc AS strgatheracc, \r\n      dbo.FM_CrBill.strPayAcc AS strpayacc, dbo.FM_CrBill.strRate AS strrate, \r\n      dbo.FM_CrBill.strAccType AS stracctype, dbo.FM_CrBill.strClosing AS strclosing, \r\n      dbo.FM_CrBill.dtEndDate AS dtenddate, dbo.FM_CrBill.dblTax AS dbltax, \r\n      dbo.FM_CrBill.dblPoundage AS dblpoundage, dbo.FM_CrBill.dblOther AS dblother, \r\n      dbo.FM_CrBill.strFinaType AS strfinatype, dbo.FM_CrBill.strUsing AS strusing, \r\n      dbo.FM_CrBill.strMemo AS strmemo, dbo.FM_CrBill.strMaker AS strmaker, \r\n      dbo.FM_CrBill.strChecker AS strchecker, dbo.FM_CrBill.VT_ID AS vt_id, \r\n      dbo.FM_CrBill.bPZ AS bpz, dbo.FM_CrBill.bHide AS bhide, \r\n      dbo.FM_CrBill.cDefine1 AS cdefine1, dbo.FM_CrBill.cDefine2 AS cdefine2, \r\n      dbo.FM_CrBill.cDefine3 AS cdefine3, dbo.FM_CrBill.cDefine4 AS cdefine4, \r\n      dbo.FM_CrBill.cDefine5 AS cdefine5, dbo.FM_CrBill.cDefine6 AS cdefine6, \r\n      dbo.FM_CrBill.cDefine7 AS cdefine7, dbo.FM_CrBill.cDefine8 AS cdefine8, \r\n      dbo.FM_CrBill.cDefine9 AS cdefine9, dbo.FM_CrBill.cDefine10 AS cdefine10, \r\n      dbo.FM_CrBill.cDefine11 AS cdefine11, dbo.FM_CrBill.cDefine12 AS cdefine12, \r\n      dbo.FM_CrBill.cDefine13 AS cdefine13, dbo.FM_CrBill.cDefine14 AS cdefine14, \r\n      dbo.FM_CrBill.cDefine15 AS cdefine15, dbo.FM_CrBill.cDefine16 AS cdefine16, \r\n      CONVERT(nvarchar, CONVERT(money, dbo.FM_CrBill.ufts), 2) AS ufts, \r\n      dbo.foreigncurrency.bcal AS bcal, dbo.foreigncurrency.idec AS idec, \r\n      dbo.foreigncurrency.nerror AS nerror, dbo.foreigncurrency.iotherused AS iotherused, \r\n      dbo.FM_CTZType.strFinaTypeName AS strfinatypename, dbo.VFM_Unit.strunitname AS strunitname\r\nFROM dbo.FM_CrBill LEFT OUTER JOIN\r\n      dbo.foreigncurrency ON dbo.FM_CrBill.strExchName = dbo.foreigncurrency.cexch_name LEFT OUTER JOIN\r\n      dbo.VFM_Unit ON dbo.FM_CrBill.strUnitCode = dbo.VFM_Unit.strunitid LEFT OUTER JOIN\r\n      dbo.FM_CTZType ON dbo.FM_CrBill.strFinaType = dbo.FM_CTZType.strFinaTypeID AND dbo.FM_CTZType.strFinaPro = '1'","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"VFM_CrBill"},{"field":"Type","value":"View"}],"columns":[{"id":"column-415543","object_id":"column-415543","name":"autoid","name_without_path":"autoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415544","object_id":"column-415544","name":"strcrbillid","name_without_path":"strcrbillid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415545","object_id":"column-415545","name":"bstatus","name_without_path":"bstatus","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415546","object_id":"column-415546","name":"btype","name_without_path":"btype","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415547","object_id":"column-415547","name":"dtdate","name_without_path":"dtdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415548","object_id":"column-415548","name":"strunitcode","name_without_path":"strunitcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415549","object_id":"column-415549","name":"dblinvest","name_without_path":"dblinvest","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"15, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415550","object_id":"column-415550","name":"jedx","name_without_path":"jedx","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415551","object_id":"column-415551","name":"dblcash","name_without_path":"dblcash","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"15, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415552","object_id":"column-415552","name":"strexchname","name_without_path":"strexchname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415553","object_id":"column-415553","name":"nflat","name_without_path":"nflat","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415554","object_id":"column-415554","name":"dblnatural","name_without_path":"dblnatural","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"15, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415555","object_id":"column-415555","name":"strgatheracc","name_without_path":"strgatheracc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415556","object_id":"column-415556","name":"strpayacc","name_without_path":"strpayacc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415557","object_id":"column-415557","name":"strrate","name_without_path":"strrate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415558","object_id":"column-415558","name":"stracctype","name_without_path":"stracctype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415559","object_id":"column-415559","name":"strclosing","name_without_path":"strclosing","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415560","object_id":"column-415560","name":"dtenddate","name_without_path":"dtenddate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415561","object_id":"column-415561","name":"dbltax","name_without_path":"dbltax","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"15, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415562","object_id":"column-415562","name":"dblpoundage","name_without_path":"dblpoundage","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"15, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415563","object_id":"column-415563","name":"dblother","name_without_path":"dblother","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"15, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415564","object_id":"column-415564","name":"strfinatype","name_without_path":"strfinatype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415565","object_id":"column-415565","name":"strusing","name_without_path":"strusing","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415566","object_id":"column-415566","name":"strmemo","name_without_path":"strmemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415567","object_id":"column-415567","name":"strmaker","name_without_path":"strmaker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415568","object_id":"column-415568","name":"strchecker","name_without_path":"strchecker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415569","object_id":"column-415569","name":"vt_id","name_without_path":"vt_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415570","object_id":"column-415570","name":"bpz","name_without_path":"bpz","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"1","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415571","object_id":"column-415571","name":"bhide","name_without_path":"bhide","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"1","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415572","object_id":"column-415572","name":"cdefine1","name_without_path":"cdefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415573","object_id":"column-415573","name":"cdefine2","name_without_path":"cdefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415574","object_id":"column-415574","name":"cdefine3","name_without_path":"cdefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415575","object_id":"column-415575","name":"cdefine4","name_without_path":"cdefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415576","object_id":"column-415576","name":"cdefine5","name_without_path":"cdefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415577","object_id":"column-415577","name":"cdefine6","name_without_path":"cdefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415578","object_id":"column-415578","name":"cdefine7","name_without_path":"cdefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415579","object_id":"column-415579","name":"cdefine8","name_without_path":"cdefine8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415580","object_id":"column-415580","name":"cdefine9","name_without_path":"cdefine9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415581","object_id":"column-415581","name":"cdefine10","name_without_path":"cdefine10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415582","object_id":"column-415582","name":"cdefine11","name_without_path":"cdefine11","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415583","object_id":"column-415583","name":"cdefine12","name_without_path":"cdefine12","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415584","object_id":"column-415584","name":"cdefine13","name_without_path":"cdefine13","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415585","object_id":"column-415585","name":"cdefine14","name_without_path":"cdefine14","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415586","object_id":"column-415586","name":"cdefine15","name_without_path":"cdefine15","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415587","object_id":"column-415587","name":"cdefine16","name_without_path":"cdefine16","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415588","object_id":"column-415588","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415589","object_id":"column-415589","name":"bcal","name_without_path":"bcal","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415590","object_id":"column-415590","name":"idec","name_without_path":"idec","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415591","object_id":"column-415591","name":"nerror","name_without_path":"nerror","description":null,"is_pk":false,"is_identity":false,"data_type":"real","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415592","object_id":"column-415592","name":"iotherused","name_without_path":"iotherused","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415593","object_id":"column-415593","name":"strfinatypename","name_without_path":"strfinatypename","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415594","object_id":"column-415594","name":"strunitname","name_without_path":"strunitname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};