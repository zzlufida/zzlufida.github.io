window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12946","name":"v_ex_cost_imcost","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create VIEW dbo.v_ex_cost_imcost  \r\nas  \r\nselect iorderdid as sodid,im_order.cvencode,vendor.cvenname as cvenname,round(sum(isnull(fquantity,0)),6) as fqty  \r\n ,round(sum(isnull(fnatmoney,0)),2) as fcost  \r\nfrom im_order   \r\ninner join im_orderdetail on im_orderdetail.id = im_order.id left join vendor on im_order.cvencode = vendor.cvencode  \r\nwhere isnull(iordertype,0)=3\r\ngroup by iorderdid,im_order.cvencode,vendor.cvenname","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_ex_cost_imcost"},{"field":"Type","value":"View"}],"columns":[{"id":"column-333241","object_id":"column-333241","name":"sodid","name_without_path":"sodid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-333242","object_id":"column-333242","name":"cvencode","name_without_path":"cvencode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-333243","object_id":"column-333243","name":"cvenname","name_without_path":"cvenname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-333244","object_id":"column-333244","name":"fqty","name_without_path":"fqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-333245","object_id":"column-333245","name":"fcost","name_without_path":"fcost","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};