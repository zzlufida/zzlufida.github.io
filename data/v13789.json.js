window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13789","name":"v_pu_cgjhzqlbyrd","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE view [dbo].[v_pu_cgjhzqlbyrd]\r\nAS\r\n\tselect  po_podetails.id,po_podetails.iquantity,sum(isnull(arrqty,0)) as arrqty, \r\n\t--sum(case when po_podetails.dArriveDate>=arr.caudittime then arr.arrqty else 0 end) as intimeqty\r\n\tsum(case when po_podetails.dArriveDate>=arr.caudittime then arr.arrqty else case when arr.arrqty<0 then arr.arrqty when arr.arrqty is null then null else 0 end end) as intimeqty \r\n\tfrom po_podetails\r\n\t--from po_pomain\r\n\t--inner join po_podetails on po_pomain.poid=po_podetails.poid\r\n\tleft join \r\n\t(\r\n\t\tselect convert(nvarchar(10),dnverifytime,120) as caudittime,\r\n\t\t--121 补丁同步 U82016080400422\r\n\t\t--sum(case when isnull(rdrecords01.irejectids,0)=0 then rdrecords01.iquantity else qmrejectvouchers.fquantity end) as arrqty,\r\n\t\tsum(case when isnull(rdrecords01.irejectids,0)=0 then rdrecords01.iquantity else qmrejectvouchers.fquantity * rdrecords01.iquantity/qmrejectvouchers.FDIMQUANTITY end) as arrqty,\r\n\t\tiposid \r\n\t\tfrom rdrecords01 \r\n\t\tleft join rdrecord01 on rdrecord01.id =rdrecords01.id \r\n\t\tleft join qmrejectvouchers on qmrejectvouchers.autoid=rdrecords01.irejectids \r\n\t\twhere isnull(rdrecord01.cvouchtype,'') = N'01' and \r\n\t\trdrecord01.cbustype <> N'委外加工' and iposid is not null --and isnull(bredvouch,0)=0 \r\n\t\tgroup by dnverifytime ,iposid,bredvouch \r\n\t) arr\r\n\ton arr.iposid=po_podetails.id\r\n\tgroup by po_podetails.id,po_podetails.iquantity","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_pu_cgjhzqlbyrd"},{"field":"Type","value":"View"}],"columns":[{"id":"column-398861","object_id":"column-398861","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-398862","object_id":"column-398862","name":"iquantity","name_without_path":"iquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-398863","object_id":"column-398863","name":"arrqty","name_without_path":"arrqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-398864","object_id":"column-398864","name":"intimeqty","name_without_path":"intimeqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};