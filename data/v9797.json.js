window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v9797","name":"AA_AuthClassDic","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.AA_AuthClassDic \r\nAS \r\nSELECT AA_AuthClassDic_base.*,AA_AuthClassDic_Lang.cClassCh\r\nFrom AA_AuthClassDic_base \r\njoin AA_AuthClassDic_Lang on AA_AuthClassDic_base.cBusObId=AA_AuthClassDic_Lang.cBusObId and\r\nAA_AuthClassDic_base.cClassEn=AA_AuthClassDic_Lang.cClassEn\r\nwhere LocaleID =dbo.UDF_GetLocaleID()","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"AA_AuthClassDic"},{"field":"Type","value":"View"}],"columns":[{"id":"column-156379","object_id":"column-156379","name":"cBusObId","name_without_path":"cBusObId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156380","object_id":"column-156380","name":"cClassEn","name_without_path":"cClassEn","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156381","object_id":"column-156381","name":"cClassGradeDef","name_without_path":"cClassGradeDef","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156382","object_id":"column-156382","name":"cClassETable","name_without_path":"cClassETable","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156383","object_id":"column-156383","name":"cClassECode","name_without_path":"cClassECode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156384","object_id":"column-156384","name":"cClassEName","name_without_path":"cClassEName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156385","object_id":"column-156385","name":"cBusObCCode","name_without_path":"cBusObCCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156386","object_id":"column-156386","name":"cClassEEnd","name_without_path":"cClassEEnd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156387","object_id":"column-156387","name":"cClassCh","name_without_path":"cClassCh","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};