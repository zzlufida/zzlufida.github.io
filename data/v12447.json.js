window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12447","name":"st_RelProvouchIDRF","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE  VIEW dbo.st_RelProvouchIDRF\r\nAS\r\nselect AllocateId,m.moid,m.modid,sourceqcid,sourceqcdid,SourceSvcDId,SourceSvcId,n.byproductflag,m.ordertype,m.orderdid\r\n from mom_orderdetail m \r\nleft join mom_moallocate n on m.modid=n.modid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"st_RelProvouchIDRF"},{"field":"Type","value":"View"}],"columns":[{"id":"column-306488","object_id":"column-306488","name":"AllocateId","name_without_path":"AllocateId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306489","object_id":"column-306489","name":"moid","name_without_path":"moid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306490","object_id":"column-306490","name":"modid","name_without_path":"modid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306491","object_id":"column-306491","name":"sourceqcid","name_without_path":"sourceqcid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306492","object_id":"column-306492","name":"sourceqcdid","name_without_path":"sourceqcdid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306493","object_id":"column-306493","name":"SourceSvcDId","name_without_path":"SourceSvcDId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"80","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306494","object_id":"column-306494","name":"SourceSvcId","name_without_path":"SourceSvcId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"80","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306495","object_id":"column-306495","name":"byproductflag","name_without_path":"byproductflag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306496","object_id":"column-306496","name":"ordertype","name_without_path":"ordertype","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306497","object_id":"column-306497","name":"orderdid","name_without_path":"orderdid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};