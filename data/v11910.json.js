window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11910","name":"PU_V_PUOrderGeneralQuery_FK","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create VIEW dbo.PU_V_PUOrderGeneralQuery_FK  \r\nAS  \r\nSELECT  ap_Closebill.iid,PurBillVouchs.id,PurBillVouchs.iposid,PurBillVouch.csource    \r\nFROM ap_xjdetail ap_detail WITH(nolock) left join AP_CloseBill on ap_detail.cvouchtype=ap_closebill.cvouchtype and ap_detail.cvouchid=ap_closebill.cvouchid and ap_detail.cflag='ap'     \r\nINNER JOIN PurBillVouch ON ap_detail.ccovouchtype=PurBillVouch.cPBVbilltype and ap_detail.ccovouchid=PurBillVouch.cPBVCode     \r\nINNER JOIN PurBillVouchs ON PurBillVouchs.PBVID=PurBillVouch.PBVID and purbillvouchs.id= ap_detail.ibvid    \r\nwhere ap_detail.cvouchtype like '4%' and ap_detail.ccovouchtype like '0%'   \r\nunion     \r\nSELECT  ap_Closebill.iid,PurBillVouchs.id,PurBillVouchs.iposid,PurBillVouch.csource    \r\nFROM ap_detail WITH(nolock) left join AP_CloseBill on ap_detail.cvouchtype=ap_closebill.cvouchtype and ap_detail.cvouchid=ap_closebill.cvouchid and ap_detail.cflag='ap'     \r\nINNER JOIN PurBillVouch ON ap_detail.ccovouchtype=PurBillVouch.cPBVbilltype and ap_detail.ccovouchid=PurBillVouch.cPBVCode     \r\nINNER JOIN PurBillVouchs ON PurBillVouchs.PBVID=PurBillVouch.PBVID and purbillvouchs.id= ap_detail.ibvid    \r\nwhere ap_detail.cvouchtype like '4%' and ap_detail.ccovouchtype like '0%' and  (ap_detail.cprocstyle='9P' or ap_detail.cprocstyle='XJ' )  \r\nunion \r\nSELECT ap_Closebill.iid,PurBillVouchs.id,PurBillVouchs.iposid,PurBillVouch.csource    \r\nFROM AP_CloseBill INNER JOIN PurBillVouch ON AP_CloseBill.cCancelno=PurBillVouch.bPayMent and ISNULL(AP_CloseBill.cCancelno,'')<>''\r\nINNER JOIN PurBillVouchs ON PurBillVouchs.PBVID=PurBillVouch.PBVID  \r\nleft join ap_xjdetail on ap_xjdetail.cCancelNo=AP_CloseBill.cCancelNo\r\nwhere AP_CloseBill.cFlag='AP' and ap_xjdetail.cCancelNo is null","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"PU_V_PUOrderGeneralQuery_FK"},{"field":"Type","value":"View"}],"columns":[{"id":"column-259796","object_id":"column-259796","name":"iid","name_without_path":"iid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259797","object_id":"column-259797","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259798","object_id":"column-259798","name":"iposid","name_without_path":"iposid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259799","object_id":"column-259799","name":"csource","name_without_path":"csource","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};