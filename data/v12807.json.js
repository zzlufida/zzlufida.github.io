window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12807","name":"v_Dimension_TradeClass","subtype":"VIEW","is_user_defined":false,"description":null,"script":"/*==============================================================*/\r\n/* View: v_Dimension_TradeClass                                 */\r\n/*==============================================================*/\r\ncreate view v_Dimension_TradeClass as \r\nselect ctradeccode as ccode,ctradecname as cname,(case when isnull(btradecend,0)=1 then -1 else itradecgrade end) as igrade from TradeClass","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_Dimension_TradeClass"},{"field":"Type","value":"View"}],"columns":[{"id":"column-320163","object_id":"column-320163","name":"ccode","name_without_path":"ccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-320164","object_id":"column-320164","name":"cname","name_without_path":"cname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-320165","object_id":"column-320165","name":"igrade","name_without_path":"igrade","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};