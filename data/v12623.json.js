window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12623","name":"V_AA_ProcedureDic","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW V_AA_ProcedureDic as \r\nSELECT AA_ProcedureDic.*,cShowProductName,cShowTableName from AA_ProcedureDic \r\n\tleft join AA_TableDic_Lang on AA_ProcedureDic.cRefTableName=AA_TableDic_Lang.cTableName and AA_TableDic_Lang.LocaleID=DBO.UDF_GetLocaleID()\r\n\tleft join AA_ProductDic_Lang on AA_TableDic_Lang.cProductID=AA_ProductDic_Lang.cProductID and AA_ProductDic_Lang.LocaleID=DBO.UDF_GetLocaleID()","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_AA_ProcedureDic"},{"field":"Type","value":"View"}],"columns":[{"id":"column-314584","object_id":"column-314584","name":"cProcedureName","name_without_path":"cProcedureName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314585","object_id":"column-314585","name":"cTableName","name_without_path":"cTableName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314586","object_id":"column-314586","name":"cRefTableName","name_without_path":"cRefTableName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314587","object_id":"column-314587","name":"cRefFieldName","name_without_path":"cRefFieldName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314588","object_id":"column-314588","name":"cJoinTableCond","name_without_path":"cJoinTableCond","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314589","object_id":"column-314589","name":"cWhereCond","name_without_path":"cWhereCond","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314590","object_id":"column-314590","name":"iExeParam","name_without_path":"iExeParam","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314591","object_id":"column-314591","name":"dInsertDate","name_without_path":"dInsertDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314592","object_id":"column-314592","name":"cMemo","name_without_path":"cMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314593","object_id":"column-314593","name":"pubufts","name_without_path":"pubufts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314594","object_id":"column-314594","name":"cShowProductName","name_without_path":"cShowProductName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314595","object_id":"column-314595","name":"cShowTableName","name_without_path":"cShowTableName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};