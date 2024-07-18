window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13047","name":"v_ex_OrderGeneralQuery_FK","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_ex_OrderGeneralQuery_FK\r\nas \r\nSELECT  ap_closebill.iid,im_invoice.id,im_invoicedetail.iorderautoid \r\nFROM ap_xjdetail ap_detail WITH(nolock) left join ap_closebill on ap_detail.cvouchtype=ap_closebill.cvouchtype and ap_detail.cvouchid=ap_closebill.cvouchid and ap_detail.cflag='ap'   \r\nINNER JOIN im_invoice ON left(ap_detail.ccovouchtype,4)=im_invoice.cvouchtype and ap_detail.ccovouchid=im_invoice.ccode   \r\nINNER JOIN im_invoicedetail ON im_invoicedetail.id=im_invoice.id and im_invoicedetail.autoid= ap_detail.ibvid  \r\nwhere ap_detail.cvouchtype like '4%' and ap_detail.ccovouchtype like 'IM%'\r\nunion   \r\nSELECT  ap_closebill.iid,im_invoice.id,im_invoicedetail.iorderautoid\r\nFROM ap_detail WITH(nolock) left join ap_closebill on ap_detail.cvouchtype=ap_closebill.cvouchtype and ap_detail.cvouchid=ap_closebill.cvouchid and ap_detail.cflag='ap'   \r\nINNER JOIN im_invoice ON left(ap_detail.ccovouchtype,4)=im_invoice.cvouchtype and ap_detail.ccovouchid=im_invoice.ccode   \r\nINNER JOIN im_invoicedetail ON im_invoicedetail.id=im_invoice.id and im_invoicedetail.autoid= ap_detail.ibvid  \r\nwhere ap_detail.cvouchtype like '4%' and ap_detail.ccovouchtype like 'IM%' and  (ap_detail.cprocstyle='9P' or ap_detail.cprocstyle='XJ' )","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_ex_OrderGeneralQuery_FK"},{"field":"Type","value":"View"}],"columns":[{"id":"column-342871","object_id":"column-342871","name":"iid","name_without_path":"iid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-342872","object_id":"column-342872","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-342873","object_id":"column-342873","name":"iorderautoid","name_without_path":"iorderautoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};