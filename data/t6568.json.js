window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t6568","name":"hr_tm_SpeTimeUseLess","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_tm_SpeTimeUseLess"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-81318","object_id":"column-81318","name":"uRecordId","name_without_path":"uRecordId","description":null,"is_pk":true,"is_identity":false,"data_type":"UFUID: uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"create default D_UFUID\r\n    as newid()\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81319","object_id":"column-81319","name":"ParametersCode","name_without_path":"ParametersCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81320","object_id":"column-81320","name":"dTimeBegin","name_without_path":"dTimeBegin","description":null,"is_pk":false,"is_identity":false,"data_type":"UFTime: nchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFTime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81321","object_id":"column-81321","name":"dTimeEnd","name_without_path":"dTimeEnd","description":null,"is_pk":false,"is_identity":false,"data_type":"UFTime: nchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFTime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81322","object_id":"column-81322","name":"dTimeDel","name_without_path":"dTimeDel","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"8, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81323","object_id":"column-81323","name":"iOverDate","name_without_path":"iOverDate","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81324","object_id":"column-81324","name":"Memo","name_without_path":"Memo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[{"name":"PK_hr_tm_SpeTimeUseLess","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"uRecordId","name":"uRecordId"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};