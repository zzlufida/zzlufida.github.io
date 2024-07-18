window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14157","name":"VQD_V_DataTables","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.VQD_V_DataTables\r\nAS\r\nSELECT TOP 100 PERCENT TableName, CASE WHEN EXISTS\r\n          (SELECT caption\r\n         FROM VQD_CaptionLang\r\n         WHERE Localid = dbo.UDF_GetLocaleID() AND ResID = TableName) THEN\r\n          (SELECT caption\r\n         FROM VQD_CaptionLang\r\n         WHERE Localid = dbo.UDF_GetLocaleID() AND ResID = TableName) ELSE\r\n          (SELECT caption\r\n         FROM VQD_CaptionLang\r\n         WHERE Localid = 'zh-CN' AND ResID = TableName) END AS Caption, bSystem, \r\n      Type, CONVERT(money, ts) AS ts, KeyCol\r\nFROM dbo.VQD_DataTable\r\nORDER BY TableName","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"VQD_V_DataTables"},{"field":"Type","value":"View"}],"columns":[{"id":"column-419085","object_id":"column-419085","name":"TableName","name_without_path":"TableName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419086","object_id":"column-419086","name":"Caption","name_without_path":"Caption","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419087","object_id":"column-419087","name":"bSystem","name_without_path":"bSystem","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419088","object_id":"column-419088","name":"Type","name_without_path":"Type","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419089","object_id":"column-419089","name":"ts","name_without_path":"ts","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419090","object_id":"column-419090","name":"KeyCol","name_without_path":"KeyCol","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};