window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11824","name":"pl_CO_CheckReportV","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view pl_CO_CheckReportV \r\nas \r\n\r\nSELECT  distinct\r\ncase A.VouchType when 0 then R.InvCode else Ro.cinvcode end  AS cInvCode, \r\nI.cInvName AS cInvName, \r\nI.cInvAddCode  as cInvAddCode,\r\nI.cInvStd AS cInvStd,\r\na.CoVersion AS CoVersion,\r\nA.iRealCOID as iRealCOID,\r\ncase A.VouchType when 0 then R.cDeptID else RO.cDeptID end  AS cDeptID, \r\ncase A.VouchType when 0 then R.cDepName else RO.cDepName end AS cDepName, \r\ncase A.VouchType when 0 then R.cmocode else RO.cOmCode end  AS cOmCode,\r\ncase A.VouchType when 0 then R.iMOsubSn else Ro.iOmSubSN end  AS iOmSubSN,\r\nIC.cInvCName as cInvCName,\r\nA.VouchType as VouchType\r\n\r\nfrom \r\npl_CO_CalResult A \r\nleft JOIN  dbo.Caq_COReal R ON a.iRealCOID = R.iRealCOID and A.vouchtype=0 \r\nleft JOIN  \r\n(select PL_co_omcoreal.*,Caq_CostCenter.cdepName from PL_co_omcoreal inner join  Caq_CostCenter on PL_co_omcoreal.cdeptid=Caq_CostCenter.cdeptid)  \r\nRO ON a.iRealCOID = RO.iRealCOID and A.vouchtype=1 AND a.IPERIOD=ro.IPERIOD\r\ninner join inventory I on I.cInvCode =case A.vouchtype when 0 then R.invcode else RO.cinvcode end\r\nleft join InventoryClass  IC  on  IC.cInvCCode = I.cInvCCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"pl_CO_CheckReportV"},{"field":"Type","value":"View"}],"columns":[{"id":"column-255389","object_id":"column-255389","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-255390","object_id":"column-255390","name":"cInvName","name_without_path":"cInvName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-255391","object_id":"column-255391","name":"cInvAddCode","name_without_path":"cInvAddCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-255392","object_id":"column-255392","name":"cInvStd","name_without_path":"cInvStd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-255393","object_id":"column-255393","name":"CoVersion","name_without_path":"CoVersion","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-255394","object_id":"column-255394","name":"iRealCOID","name_without_path":"iRealCOID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-255395","object_id":"column-255395","name":"cDeptID","name_without_path":"cDeptID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-255396","object_id":"column-255396","name":"cDepName","name_without_path":"cDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-255397","object_id":"column-255397","name":"cOmCode","name_without_path":"cOmCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-255398","object_id":"column-255398","name":"iOmSubSN","name_without_path":"iOmSubSN","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-255399","object_id":"column-255399","name":"cInvCName","name_without_path":"cInvCName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-255400","object_id":"column-255400","name":"VouchType","name_without_path":"VouchType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};