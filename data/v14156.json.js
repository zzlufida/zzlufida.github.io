window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14156","name":"VQD_V_Categorys","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.VQD_V_Categorys  \r\nAS  \r\nSELECT Guid AS CategoryID, CASE WHEN EXISTS  \r\n          (SELECT Caption  \r\n         FROM VQD_CaptionLang  \r\n         WHERE Localid = dbo.UDF_GetLocaleID() AND   \r\n               ResID = Cast(Guid AS nvarchar(50))) THEN  \r\n          (SELECT Caption  \r\n         FROM VQD_CaptionLang  \r\n         WHERE Localid = dbo.UDF_GetLocaleID() AND   \r\n               ResID = Cast(Guid AS nvarchar(50))) ELSE  \r\n          (SELECT Caption  \r\n         FROM VQD_CaptionLang  \r\n         WHERE Localid = 'zh-CN' AND ResID = Cast(Guid AS nvarchar(50)))   \r\n      END AS CategoryName,isnull(bSystem,0) as bSystem , isnull(VQD_CategoryDefinition.csystemid ,N'EX')as csystemid \r\n      -- , cDisplaySystemId\r\n\r\nFROM dbo.VQD_CategoryDefinition","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"VQD_V_Categorys"},{"field":"Type","value":"View"}],"columns":[{"id":"column-419081","object_id":"column-419081","name":"CategoryID","name_without_path":"CategoryID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419082","object_id":"column-419082","name":"CategoryName","name_without_path":"CategoryName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419083","object_id":"column-419083","name":"bSystem","name_without_path":"bSystem","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419084","object_id":"column-419084","name":"csystemid","name_without_path":"csystemid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};