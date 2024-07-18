window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13806","name":"V_PubChannelTask","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE   VIEW dbo.V_PubChannelTask\r\nAS\r\nSELECT TOP 50 MsgID, ChannelID, RetryCount, CurrentRetryCount, ExpiresTime, PriorLevel\r\nFROM dbo.Engine_PubChannelTask WITH (READPAST)\r\nWHERE OnLine=0 AND RetryTime<=getdate()\r\nORDER BY PriorLevel DESC","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_PubChannelTask"},{"field":"Type","value":"View"}],"columns":[{"id":"column-400654","object_id":"column-400654","name":"MsgID","name_without_path":"MsgID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-400655","object_id":"column-400655","name":"ChannelID","name_without_path":"ChannelID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-400656","object_id":"column-400656","name":"RetryCount","name_without_path":"RetryCount","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-400657","object_id":"column-400657","name":"CurrentRetryCount","name_without_path":"CurrentRetryCount","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-400658","object_id":"column-400658","name":"ExpiresTime","name_without_path":"ExpiresTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-400659","object_id":"column-400659","name":"PriorLevel","name_without_path":"PriorLevel","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};