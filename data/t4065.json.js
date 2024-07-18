window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4065","name":"BG_HistoryData","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"BG_HistoryData"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-40391","object_id":"column-40391","name":"cVersionCode","name_without_path":"cVersionCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40392","object_id":"column-40392","name":"cFormCode","name_without_path":"cFormCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40386","object_id":"column-40386","name":"cOrganCode","name_without_path":"cOrganCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"18","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40393","object_id":"column-40393","name":"dDate","name_without_path":"dDate","description":null,"is_pk":true,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40387","object_id":"column-40387","name":"dOldData","name_without_path":"dOldData","description":null,"is_pk":false,"is_identity":false,"data_type":"image","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40388","object_id":"column-40388","name":"cAuditOpinion","name_without_path":"cAuditOpinion","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40389","object_id":"column-40389","name":"cConstituteID","name_without_path":"cConstituteID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40390","object_id":"column-40390","name":"iMakeYear","name_without_path":"iMakeYear","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[{"name":"PK_BG_HistoryData","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"iMakeYear","name":"iMakeYear"},{"path":null,"name_without_path":"cVersionCode","name":"cVersionCode"},{"path":null,"name_without_path":"cFormCode","name":"cFormCode"},{"path":null,"name_without_path":"cOrganCode","name":"cOrganCode"},{"path":null,"name_without_path":"dDate","name":"dDate"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};