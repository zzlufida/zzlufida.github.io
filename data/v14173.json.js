window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14173","name":"VQD_V_VoucherQueryRef","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.VQD_V_VoucherQueryRef\r\nAS\r\nSELECT dbo.VQD_Query.Guid, CASE WHEN EXISTS\r\n          (SELECT VQD_CaptionLang.Caption\r\n         FROM VQD_CaptionLang\r\n         WHERE Localid = dbo.UDF_GetLocaleID() AND \r\n               ResID = 'Query.' + Cast(VQD_Query.Guid AS nvarchar(50))) THEN\r\n          (SELECT VQD_CaptionLang.Caption\r\n         FROM VQD_CaptionLang\r\n         WHERE Localid = dbo.UDF_GetLocaleID() AND \r\n               ResID = 'Query.' + Cast(VQD_Query.Guid AS nvarchar(50))) ELSE\r\n          (SELECT VQD_CaptionLang.Caption\r\n         FROM VQD_CaptionLang\r\n         WHERE Localid = 'zh-CN' AND \r\n               ResID = 'Query.' + Cast(VQD_Query.Guid AS nvarchar(50))) END AS Name, \r\n      dbo.VQD_V_VoucherDataSource.Name AS SourceCaption, \r\n      dbo.VQD_SubSource.SourceID AS Source, \r\n      CASE WHEN dbo.VQD_SubSource.Type = 'Header' THEN '表头' ELSE '表头表体' END AS\r\n       ListType, dbo.VQD_SubSource.Type\r\nFROM dbo.VQD_Query INNER JOIN\r\n      dbo.VQD_FilterDefinition ON \r\n      dbo.VQD_Query.FilterID = dbo.VQD_FilterDefinition.Guid INNER JOIN\r\n      dbo.VQD_SubSource ON \r\n      dbo.VQD_FilterDefinition.Source = dbo.VQD_SubSource.Source INNER JOIN\r\n      dbo.VQD_V_VoucherDataSource ON \r\n      dbo.VQD_SubSource.SourceID = dbo.VQD_V_VoucherDataSource.Guid\r\nWHERE (dbo.VQD_SubSource.Type <> 'Body')","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"VQD_V_VoucherQueryRef"},{"field":"Type","value":"View"}],"columns":[{"id":"column-419225","object_id":"column-419225","name":"Guid","name_without_path":"Guid","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419226","object_id":"column-419226","name":"Name","name_without_path":"Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419227","object_id":"column-419227","name":"SourceCaption","name_without_path":"SourceCaption","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419228","object_id":"column-419228","name":"Source","name_without_path":"Source","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419229","object_id":"column-419229","name":"ListType","name_without_path":"ListType","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419230","object_id":"column-419230","name":"Type","name_without_path":"Type","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};