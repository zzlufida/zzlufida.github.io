window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12757","name":"v_CO_MoOpList","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE view v_CO_MoOpList\r\nas\r\n--工艺路线人工费用\r\nselect D.MoRoutingId,D.MoRoutingDId,D.Wcid,O.OperationId,D.OpSeq,M.Modid\r\nfrom sfc_morouting M\r\n     inner join sfc_moroutingDetail D on M.MoRoutingId=D.MoRoutingId\r\n     inner join sfc_operation O on O.OperationId=D.OperationId","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_CO_MoOpList"},{"field":"Type","value":"View"}],"columns":[{"id":"column-318604","object_id":"column-318604","name":"MoRoutingId","name_without_path":"MoRoutingId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318605","object_id":"column-318605","name":"MoRoutingDId","name_without_path":"MoRoutingDId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318606","object_id":"column-318606","name":"Wcid","name_without_path":"Wcid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318607","object_id":"column-318607","name":"OperationId","name_without_path":"OperationId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318608","object_id":"column-318608","name":"OpSeq","name_without_path":"OpSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318609","object_id":"column-318609","name":"Modid","name_without_path":"Modid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};