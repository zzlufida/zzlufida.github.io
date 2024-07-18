window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14168","name":"VQD_V_RptQueryRef","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.VQD_V_RptQueryRef\r\nAS\r\nSELECT dbo.VQD_FilterDefinition.Source, dbo.VQD_Query.Guid, \r\n      dbo.VQD_V_DataTables.Caption AS SourceCaption, CASE WHEN EXISTS\r\n          (SELECT VQD_CaptionLang.Caption\r\n         FROM VQD_CaptionLang\r\n         WHERE Localid = dbo.UDF_GetLocaleID() AND \r\n               ResID = 'Query.' + Cast(VQD_Query.Guid AS nvarchar(50))) THEN\r\n          (SELECT VQD_CaptionLang.Caption\r\n         FROM VQD_CaptionLang\r\n         WHERE Localid = dbo.UDF_GetLocaleID() AND \r\n               ResID = 'Query.' + Cast(VQD_Query.Guid AS nvarchar(50))) ELSE\r\n          (SELECT VQD_CaptionLang.Caption\r\n         FROM VQD_CaptionLang\r\n         WHERE Localid = 'zh-CN' AND \r\n               ResID = 'Query.' + Cast(VQD_Query.Guid AS nvarchar(50))) \r\n      END AS Name\r\nFROM dbo.VQD_Query INNER JOIN\r\n      dbo.VQD_FilterDefinition ON \r\n      dbo.VQD_Query.FilterID = dbo.VQD_FilterDefinition.Guid INNER JOIN\r\n      dbo.VQD_V_DataTables ON \r\n      dbo.VQD_FilterDefinition.Source = dbo.VQD_V_DataTables.TableName","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"VQD_V_RptQueryRef"},{"field":"Type","value":"View"}],"columns":[{"id":"column-419175","object_id":"column-419175","name":"Source","name_without_path":"Source","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419176","object_id":"column-419176","name":"Guid","name_without_path":"Guid","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419177","object_id":"column-419177","name":"SourceCaption","name_without_path":"SourceCaption","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419178","object_id":"column-419178","name":"Name","name_without_path":"Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};