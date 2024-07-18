window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v9802","name":"AA_DefineExtend","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].[AA_DefineExtend]\r\nAS\r\nSELECT     dbo.AA_DefineExtendTables.GUID, dbo.AA_DefineExtendTables.cTableName, dbo.AA_DefineExtendTables.cType,   \r\n           dbo.AA_DefineExtendTables.cTableDesc, dbo.AA_DefineExtendTables.cPKName, dbo.AA_DefineExtendTables.cSub_ID,   \r\n           dbo.AA_DefineExtendTables.bDeleteIgnoreCheck, dbo.AA_DefineExtendTables.cardSection,   \r\n           dbo.AA_DefineExtendTables_Lang.cTableName AS TableName, dbo.AA_DefineExtendTables_Lang.cTableDesc AS TableDesc,   \r\n           dbo.AA_DefineExtendTables_Lang.localeID,dbo.AA_DefineExtendTables.cParentTableName,\r\n           dbo.AA_DefineExtendTables.GroupName\r\nFROM dbo.AA_DefineExtendTables INNER JOIN\r\n     dbo.AA_DefineExtendTables_Lang ON dbo.AA_DefineExtendTables.cTableName = dbo.AA_DefineExtendTables_Lang.cTableName\r\nWHERE (AA_DefineExtendTables_Lang.localeID=dbo.UDF_GetLocaleID())","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"AA_DefineExtend"},{"field":"Type","value":"View"}],"columns":[{"id":"column-156484","object_id":"column-156484","name":"GUID","name_without_path":"GUID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156485","object_id":"column-156485","name":"cTableName","name_without_path":"cTableName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156486","object_id":"column-156486","name":"cType","name_without_path":"cType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156487","object_id":"column-156487","name":"cTableDesc","name_without_path":"cTableDesc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156488","object_id":"column-156488","name":"cPKName","name_without_path":"cPKName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156489","object_id":"column-156489","name":"cSub_ID","name_without_path":"cSub_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156490","object_id":"column-156490","name":"bDeleteIgnoreCheck","name_without_path":"bDeleteIgnoreCheck","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156491","object_id":"column-156491","name":"cardSection","name_without_path":"cardSection","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156492","object_id":"column-156492","name":"TableName","name_without_path":"TableName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156493","object_id":"column-156493","name":"TableDesc","name_without_path":"TableDesc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156494","object_id":"column-156494","name":"localeID","name_without_path":"localeID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156495","object_id":"column-156495","name":"cParentTableName","name_without_path":"cParentTableName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156496","object_id":"column-156496","name":"GroupName","name_without_path":"GroupName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};