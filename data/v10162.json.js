window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10162","name":"caq_zlrel_old","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view caq_zlrel_old\r\nas\r\n\tselect distinct b.irealcoid as zid,b.cbatch as zbatch,g.irealcoid lid,g.cbatch lbatch,isnull(g.cdeptid,'') as cdeptid from ca_batchmap b\r\n\tjoin bom_parent d on b.iPartid=d.parentid and b.iBomtype <> 3\r\n\tjoin bom_bom f on f.bomid=d.bomid\r\n\t  and isnull(f.version,'')=b.version and isnull(f.IdentCode,'')=b.IdentCode\r\n\tjoin bom_opcomponent e on e.bomid=d.bomid and e.byproductflag=1  and e.producttype =2\r\n\tjoin ca_batchmap g on g.iPartid=e.ComponentID\r\n\t  and isnull(b.cmocode,'')=isnull(g.cmocode,'')\r\n\t  and isnull(b.iMoSubSN,'')=isnull(g.iMoSubSN,'')\r\n\t  and isnull(b.iMoRouteSN,'')=isnull(g.iMoRouteSN,'')\r\n\t  and isnull(b.cbatch,'')=isnull(g.cbatch,'')\r\n\t  and isnull(b.cdeptid,'')=isnull(g.cdeptid,'')\r\n\t  and g.iBomtype=3","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"caq_zlrel_old"},{"field":"Type","value":"View"}],"columns":[{"id":"column-174734","object_id":"column-174734","name":"zid","name_without_path":"zid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174735","object_id":"column-174735","name":"zbatch","name_without_path":"zbatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174736","object_id":"column-174736","name":"lid","name_without_path":"lid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174737","object_id":"column-174737","name":"lbatch","name_without_path":"lbatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174738","object_id":"column-174738","name":"cdeptid","name_without_path":"cdeptid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};