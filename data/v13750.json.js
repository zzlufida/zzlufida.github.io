window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13750","name":"v_om_cgjhzql","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_om_cgjhzql\r\nAS\r\n\tselect  om_modetails.modetailsid,om_modetails.iquantity,sum(isnull(arrqty,0)) as arrqty, \r\n\tsum(case when om_modetails.dArriveDate>=arr.caudittime then arr.arrqty else case when arr.arrqty<0 then arr.arrqty  when arr.arrqty is null then arr.arrqty  else 0 end end) as intimeqty \r\n\tfrom om_modetails\r\n\tleft join \r\n\t(\r\n\t\tselect convert(nvarchar(10),caudittime,120) as caudittime,\r\n\t\tsum(iquantity-isnull(frefusequantity,0)) as arrqty,iposid \r\n\t\tfrom PU_ArrivalVouchs \r\n\t\tleft join PU_ArrivalVouch on PU_ArrivalVouch.id =PU_ArrivalVouchs.id \r\n\t\tand PU_ArrivalVouch.ibilltype in (0,1)\r\n\t\twhere isnull(PU_ArrivalVouch.cvouchtype,'') = N'' and \r\n\t\tPU_ArrivalVouch.cbustype = N'委外加工' and iposid is not null \r\n\t\tgroup by caudittime,iposid,ibilltype \r\n\t) arr\r\n\ton arr.iposid=om_modetails.modetailsid \r\n\tgroup by om_modetails.modetailsid,om_modetails.iquantity","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_om_cgjhzql"},{"field":"Type","value":"View"}],"columns":[{"id":"column-397390","object_id":"column-397390","name":"modetailsid","name_without_path":"modetailsid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397391","object_id":"column-397391","name":"iquantity","name_without_path":"iquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397392","object_id":"column-397392","name":"arrqty","name_without_path":"arrqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397393","object_id":"column-397393","name":"intimeqty","name_without_path":"intimeqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};