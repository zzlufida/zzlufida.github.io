window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11169","name":"HR_PF_EnumsFormulaType_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.HR_PF_EnumsFormulaType_View\r\nAS\r\nSELECT *\r\nFROM dbo.HR_PF_EnumsFormulaType with(nolock)\r\nWHERE (cLocalID = dbo.UDF_GetLocaleID())","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_PF_EnumsFormulaType_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-222814","object_id":"column-222814","name":"cEnumID","name_without_path":"cEnumID","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222815","object_id":"column-222815","name":"cEnumName","name_without_path":"cEnumName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222816","object_id":"column-222816","name":"cLocalID","name_without_path":"cLocalID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222817","object_id":"column-222817","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};