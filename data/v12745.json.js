window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12745","name":"V_CO_HsVersion","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view [dbo].[V_CO_HsVersion]\r\nas\r\n\tselect iPeriod,sVersion from pl_co_caloption\r\n\tunion\r\n\tselect dbo.caf_GetCurPeriod(),CoVersion from pl_co_coversion where DefaultVer=N'1'","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_CO_HsVersion"},{"field":"Type","value":"View"}],"columns":[{"id":"column-318459","object_id":"column-318459","name":"iPeriod","name_without_path":"iPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318460","object_id":"column-318460","name":"sVersion","name_without_path":"sVersion","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};