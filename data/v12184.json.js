window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12184","name":"SA_BizFlow","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE  VIEW [dbo].[SA_BizFlow]\r\nas  \r\nselect iflowid,csalesprocessno as cprocessno,cSalesProcessDescribes as cflowname,case isalesbusinesstype when 0 then N'普通销售' when 1 then N'委托代销'  when 2 then N'分期收款' when 3 then N'直运销售' end as cbustype,cstcode,cstname,\r\n\t'SA_16voucher' as toolbarname,isnull(bPriceManualInput,0) as baddnew,bReplyFinish as billafterlosssettle,bOrderMust as bmustso_ptxs ,bOrderMust as bmustso_wtdx,bOrderMust as bmustso_fqsk,bOrderMust as bmustso_zyxs,bPriceMust as bmustquo,bReplyMust as bneedsign,\r\n\tcase when bDeliveryOverOrder=0 then 1 else 0 end as boverorder,case when bBillOverDelivery=1 then 0 else 1 end as boverconsignment,iObtainPrice as costgettype,bSalesControl as bcusinvlimited,bReplyMust as bmustsign,bDeliveryList as bsacreat,\r\n\t'0' as breturnflag,cPriceTemplate as defaultvtid,'16' as cardnum,bOpeningProcess as bused,'refpaquo,refcrmopp' as referbtn,bPriceSimulated as refpaquo,0 as refcontract,0 as refquo,0 as refpreorder,0 as refimorder,0 as refso,0 as reffhd,0 as refpur,0 as bmustbook\r\n\t,0 as refsaleout,0 as bsaleoutcreatebillptxs,0 as bsaleoutcreatebillfqsk,ISNULL(bPriceBizScope,0) as refcrmopp,0 as refmpforecastorder\r\n\t, 0 as refreturnapp,0 as refsalesdelivery\r\nfrom sabizflow inner join saletype on sabizflow.csalestypes=saletype.cstcode\r\nwhere bOpeningProcess=1\r\nunion all \r\nselect iflowid,csalesprocessno as cprocessno,cSalesProcessDescribes as cflowname,case isalesbusinesstype when 0 then N'普通销售' when 1 then N'委托代销'  when 2 then N'分期收款' when 3 then N'直运销售' end as cbustype,cstcode,cstname,\r\n\t'SA_17voucher' as toolbarname, isnull(bOrderManualInput,0) as baddnew,bReplyFinish as billafterlosssettle,bOrderMust as bmustso_ptxs ,bOrderMust as bmustso_wtdx,bOrderMust as bmustso_fqsk,bOrderMust as bmustso_zyxs,bPriceMust as bmustquo,bReplyMust as bneedsign,\r\n\tcase when bDeliveryOverOrder=0 then 1 else 0 end as boverorder,case when bBillOverDelivery=1 then 0 else 1 end as boverconsignment,iObtainPrice as costgettype,bSalesControl as bcusinvlimited,bReplyMust as bmustsign,bDeliveryList as bsacreat,\r\n\t'0' as breturnflag,cOrderTemplate  as defaultvtid,'17' as cardnum,bOpeningProcess as bused,'refcontract,refquo,refpreorder,refimorder,refcrmopp,refmpforecastorder' as referbtn,'0' as refpaquo,bOrderContract as refcontract,bOrderQuotations as refquo,bOrderReservation as refpreorder,bOrderImportOrders as refimorder,0 as refso,0 as reffhd,0 as refpur,isnull(bMustDepositBusiness,0) as bmustbook\r\n\t,0 as refsaleout,0 as bsaleoutcreatebillptxs,0 as bsaleoutcreatebillfqsk,ISNULL(bOrderBizScope,0) as refcrmopp,ISNULL(bOrderPreOrder,0) as refmpforecastorder\r\n\t, 0 as refreturnapp,0 as refsalesdelivery\r\nfrom sabizflow inner join saletype on sabizflow.csalestypes=saletype.cstcode\r\nwhere bOpeningProcess=1\r\nunion all \r\nselect iflowid,csalesprocessno as cprocessno,cSalesProcessDescribes as cflowname,case isalesbusinesstype when 0 then N'普通销售' when 1 then N'委托代销'  when 2 then N'分期收款' when 3 then N'直运销售' end as cbustype,cstcode,cstname,\r\n\t'SA_01voucher' as toolbarname, isnull(bDeliveryManualInput,0) as baddnew,bReplyFinish as billafterlosssettle,bOrderMust as bmustso_ptxs ,bOrderMust as bmustso_wtdx,bOrderMust as bmustso_fqsk,bOrderMust as bmustso_zyxs,bPriceMust as bmustquo,bReplyMust as bneedsign,\r\n\tcase when bDeliveryOverOrder=0 then 1 else 0 end as boverorder,case when bBillOverDelivery=1 then 0 else 1 end as boverconsignment,iObtainPrice as costgettype,bSalesControl as bcusinvlimited,bReplyMust as bmustsign,bDeliveryList as bsacreat,\r\n\t'0' as breturnflag,cDeliveryTemplate  as defaultvtid,'01' as cardnum,bOpeningProcess as bused,'refso,refreturnapp' as referbtn,0  as refpaquo,0 as refcontract,0 as refquo,0 as refpreorder,0 as refimorder,bDeliverySalesOrder as refso,0 as reffhd,0 as refpur,0 as bmustbook\r\n\t,0 as refsaleout,case when isalesbusinesstype=0 and ISNULL(bbluebillsaleout,0)=1 then 1 else 0 end as bsaleoutcreatebillptxs,case when isalesbusinesstype=2 and ISNULL(bbluebillsaleout,0)=1 then 1 else 0 end as bsaleoutcreatebillfqsk,0 as refcrmopp,0 as refmpforecastorder\r\n\t,isnull(bReturnsApplyDelivery,0) as refreturnapp,0 as refsalesdelivery\r\nfrom sabizflow inner join saletype on sabizflow.csalestypes=saletype.cstcode\r\nwhere bOpeningProcess=1 and isalesbusinesstype in (0,2)\r\nunion all \r\nselect iflowid,csalesprocessno as cprocessno,cSalesProcessDescribes as cflowname,case isalesbusinesstype when 0 then N'普通销售' when 1 then N'委托代销'  when 2 then N'分期收款' when 3 then N'直运销售' end as cbustype,cstcode,cstname,\r\n\t'SA_03voucher' as toolbarname, isnull(bReturnManualInput,0) as baddnew,bReplyFinish as billafterlosssettle,bOrderMust as bmustso_ptxs ,bOrderMust as bmustso_wtdx,bOrderMust as bmustsO_fqsk,bOrderMust as bmustsO_zyxs,bPriceMust as bmustquo,bReplyMust as bneedsign,\r\n\tcase when bDeliveryOverOrder=0 then 1 else 0 end as boverorder,case when bBillOverDelivery=1 then 0 else 1 end as boverconsignment,iObtainPrice as costgettype,bSalesControl as bcusinvlimited,bReplyMust as bmustsign,bDeliveryList as bsacreat,\r\n\t'1' as breturnflag,cReturnTemplate as defaultvtid,'03' as cardnum,bOpeningProcess as bused,'refso,reffhd,refsaleout,refreturnapp' as referbtn,0 as refpaquo,0 as refcontract,0 as refquo,0 as refpreorder,0 as refimorder,bReturnOrder as refso,bReturnDeliveryList as reffhd,0 as refpur,0 as bmustbook\r\n\t,ISNULL(breddispsaleout,0) as refsaleout,case when isalesbusinesstype=0 and ISNULL(bredbillsaleout,0)=1 then 1 else 0 end as bsaleoutcreatebillptxs,case when isalesbusinesstype=2 and ISNULL(bredbillsaleout,0)=1 then 1 else 0 end as bsaleoutcreatebillfqsk,0 as refcrmopp,0 as refmpforecastorder\r\n\t,isnull(bReturnsApplyReturn,0) as refreturnapp,0 as refsalesdelivery\r\nfrom sabizflow inner join saletype on sabizflow.csalestypes=saletype.cstcode\r\nwhere bOpeningProcess=1 and isalesbusinesstype in (0,2)\r\nunion all \r\n----------\r\nselect iflowid,csalesprocessno as cprocessno,cSalesProcessDescribes as cflowname,case isalesbusinesstype when 0 then N'普通销售' when 1 then N'委托代销'  when 2 then N'分期收款' when 3 then N'直运销售' end as cbustype,cstcode,cstname,\r\n\t'sa_31voucher' as toolbarname, isnull(bReturnsApplyManualInput,0) as baddnew,bReplyFinish as billafterlosssettle,bOrderMust as bmustso_ptxs ,bOrderMust as bmustso_wtdx,bOrderMust as bmustsO_fqsk,bOrderMust as bmustsO_zyxs,bPriceMust as bmustquo,bReplyMust as bneedsign,\r\n\tcase when bDeliveryOverOrder=0 then 1 else 0 end as boverorder,case when bBillOverDelivery=1 then 0 else 1 end as boverconsignment,iObtainPrice as costgettype,bSalesControl as bcusinvlimited,bReplyMust as bmustsign,bDeliveryList as bsacreat,\r\n\t'0' as breturnflag,cReturnsApplyTemplate as defaultvtid,'sa31' as cardnum,bOpeningProcess as bused,'refsalesdelivery,refsaleout' as referbtn,\r\n\t0 as refpaquo,0 as refcontract,0 as refquo,0 as refpreorder,0 as refimorder,0 as refso,0 as reffhd,0 as refpur,0 as bmustbook\r\n\t,isnull(bReturnApplyFromSaleout,0) as refsaleout,0 as bsaleoutcreatebillptxs,0 as bsaleoutcreatebillfqsk,0 as refcrmopp,0 as refmpforecastorder\r\n\t, 0 as refreturnapp,isnull(bReturnsApplyFromDelivery,0) as refsalesdelivery\r\nfrom sabizflow inner join saletype on sabizflow.csalestypes=saletype.cstcode\r\nwhere bOpeningProcess=1 and isalesbusinesstype in (0,2)\r\nunion all \r\n----------\r\nselect iflowid,csalesprocessno as cprocessno,cSalesProcessDescribes as cflowname,case isalesbusinesstype when 0 then N'普通销售' when 1 then N'委托代销'  when 2 then N'分期收款' when 3 then N'直运销售' end as cbustype,cstcode,cstname,\r\n\t'SA_05voucher' as toolbarname, isnull(bDeliveryManualInput,0) as baddnew,bReplyFinish as billafterlosssettle,bOrderMust as bmustso_ptxs ,bOrderMust as bmustso_wtdx,bOrderMust as bmustso_fqsk,bOrderMust as bmustso_zyxs,bPriceMust as bmustquo,bReplyMust as bneedsign,\r\n\tcase when bDeliveryOverOrder=0 then 1 else 0 end as boverorder,case when bBillOverDelivery=1 then 0 else 1 end as boverconsignment,iObtainPrice as costgettype,bSalesControl as bcusinvlimited,bReplyMust as bmustsign,bDeliveryList as bsacreat,\r\n\t'0' as breturnflag,cDeliveryTemplate  as defaultvtid,'05' as cardnum,bOpeningProcess as bused,'refso' as referbtn,0  as refpaquo,0 as refcontract,0 as refquo,0 as refpreorder,0 as refimorder,bDeliverySalesOrder as refso,0 as reffhd,0 as refpur,0 as bmustbook\r\n\t,0 as refsaleout,0 as bsaleoutcreatebillptxs,0 as bsaleoutcreatebillfqsk,0 as refcrmopp,0 as refmpforecastorder\r\n\t, 0 as refreturnapp,0 as refsalesdelivery\r\nfrom sabizflow inner join saletype on sabizflow.csalestypes=saletype.cstcode\r\nwhere bOpeningProcess=1 and isalesbusinesstype=1\r\nunion all \r\nselect iflowid,csalesprocessno as cprocessno,cSalesProcessDescribes as cflowname,case isalesbusinesstype when 0 then N'普通销售' when 1 then N'委托代销'  when 2 then N'分期收款' when 3 then N'直运销售' end as cbustype,cstcode,cstname,\r\n\t'SA_06voucher' as toolbarname,  isnull(bReturnManualInput,0) as baddnew,bReplyFinish as billafterlosssettle,bOrderMust as bmustso_ptxs ,bOrderMust as bmustso_wtdx,bOrderMust as bmustso_fqsk,bOrderMust as bmustso_zyxs,bPriceMust as bmustquo,bReplyMust as bneedsign,\r\n\tcase when bDeliveryOverOrder=0 then 1 else 0 end as boverorder,case when bBillOverDelivery=1 then 0 else 1 end as boverconsignment,iObtainPrice as costgettype,bSalesControl as bcusinvlimited,bReplyMust as bmustsign,bDeliveryList as bsacreat,\r\n\t'1' as breturnflag,cReturnTemplate as defaultvtid,'06' as cardnum,bOpeningProcess as bused,'refso,reffhd' as referbtn,0 as refpaquo,0 as refcontract,0 as refquo,0 as refpreorder,0 as refimorder,bReturnOrder as refso,bReturnDeliveryList as reffhd,0 as refpur,0 as bmustbook\r\n\t,0 as refsaleout,0 as bsaleoutcreatebillptxs,0 as bsaleoutcreatebillfqsk,0 as refcrmopp,0 as refmpforecastorder\r\n\t, 0 as refreturnapp,0 as refsalesdelivery\r\nfrom sabizflow inner join saletype on sabizflow.csalestypes=saletype.cstcode\r\nwhere bOpeningProcess=1 and isalesbusinesstype=1\r\nunion all select iflowid,csalesprocessno as cprocessno,cSalesProcessDescribes as cflowname,case isalesbusinesstype when 0 then N'普通销售' when 1 then N'委托代销'  when 2 then N'分期收款' when 3 then N'直运销售' end as cbustype,cstcode,cstname,\r\n\t'SAM030401' as toolbarname,isnull(bBillBlueManualInput,0) as baddnew,bReplyFinish as billafterlosssettle,bOrderMust as bmustso_ptxs ,bOrderMust as bmustso_wtdx,bOrderMust as bmustso_fqsk,bOrderMust as bmustso_zyxs,bPriceMust as bmustquo,bReplyMust as bneedsign,\r\n\tcase when bDeliveryOverOrder=0 then 1 else 0 end as boverorder,case when bBillOverDelivery=1 then 0 else 1 end as boverconsignment,iObtainPrice as costgettype,bSalesControl as bcusinvlimited,bReplyMust as bmustsign,bDeliveryList as bsacreat,\r\n\t'0' as breturnflag,cBillSpecialTemplate as defaultvtid,'07' as cardnum,bOpeningProcess as bused,'refso,reffhd,refpur,refsaleout' as referbtn,0  as refpaquo,0 as refcontract,0 as refquo,0 as refpreorder,0 as refimorder,bBillBlueOrder as refso,case when isalesbusinesstype=3 then 0 else bBillBlueSaleList end as reffhd,bBillBlueInvoice as refpur,0 as bmustbook\r\n\t,ISNULL(bbluebillsaleout,0) as refsaleout,case when isalesbusinesstype=0 and ISNULL(bbluebillsaleout,0)=1 then 1 else 0 end as bsaleoutcreatebillptxs,case when isalesbusinesstype=2 and ISNULL(bbluebillsaleout,0)=1 then 1 else 0 end as bsaleoutcreatebillfqsk,0 as refcrmopp,0 as refmpforecastorder\r\n\t, 0 as refreturnapp,0 as refsalesdelivery\r\nfrom sabizflow inner join saletype on sabizflow.csalestypes=saletype.cstcode\r\nwhere bOpeningProcess=1 and isalesbusinesstype in (0,2,3) \r\nunion all \r\nselect iflowid,csalesprocessno as cprocessno,cSalesProcessDescribes as cflowname,case isalesbusinesstype when 0 then N'普通销售' when 1 then N'委托代销'  when 2 then N'分期收款' when 3 then N'直运销售' end as cbustype,cstcode,cstname,\r\n\t'SAM030403' as toolbarname,  isnull(bBillRedManualInput,0) as baddnew,bReplyFinish as billafterlosssettle,bOrderMust as bmustso_ptxs ,bOrderMust as bmustso_wtdx,bOrderMust as bmustso_fqsk,bOrderMust as bmustso_zyxs,bPriceMust as bmustquo,bReplyMust as bneedsign,\r\n\tcase when bDeliveryOverOrder=0 then 1 else 0 end as boverorder,case when bBillOverDelivery=1 then 0 else 1 end as boverconsignment,iObtainPrice as costgettype,bSalesControl as bcusinvlimited,bReplyMust as bmustsign,bDeliveryList as bsacreat,\r\n\t'1' as breturnflag,cBillSpecialTemplate as defaultvtid,'07' as cardnum,bOpeningProcess as bused,'refso,reffhd,refpur,refsaleout' as referbtn,0  as refpaquo,0 as refcontract,0 as refquo,0 as refpreorder,0 as refimorder,bBillRedOrder as refso,case when isalesbusinesstype=3 then 0 else bbillredsalelist end as reffhd,bBillRedInvoice as refpur,0 as bmustbook\r\n\t,ISNULL(bredbillsaleout,0) as refsaleout,0 as bsaleoutcreatebillptxs, 0 as bsaleoutcreatebillfqsk,0 as refcrmopp,0 as refmpforecastorder\r\n\t, 0 as refreturnapp,0 as refsalesdelivery\r\nfrom sabizflow inner join saletype on sabizflow.csalestypes=saletype.cstcode\r\nwhere bOpeningProcess=1 and isalesbusinesstype in (0,2,3)\r\nunion all \r\nselect iflowid,csalesprocessno as cprocessno,cSalesProcessDescribes as cflowname,case isalesbusinesstype when 0 then N'普通销售' when 1 then N'委托代销'  when 2 then N'分期收款' when 3 then N'直运销售' end as cbustype,cstcode,cstname,\r\n\t'SAM030402' as toolbarname, isnull(bBillBlueManualInput,0) as baddnew,bReplyFinish as billafterlosssettle,bOrderMust as bmustso_ptxs ,bOrderMust as bmustso_wtdx,bOrderMust as bmustso_fqsk,bOrderMust as bmustso_zyxs,bPriceMust as bmustquo,bReplyMust as bneedsign,\r\n\tcase when bDeliveryOverOrder=0 then 1 else 0 end as boverorder,case when bBillOverDelivery=1 then 0 else 1 end as boverconsignment,iObtainPrice as costgettype,bSalesControl as bcusinvlimited,bReplyMust as bmustsign,bDeliveryList as bsacreat,\r\n\t'0' as breturnflag,cBillOrdinaryTemplate as defaultvtid,'13' as cardnum,bOpeningProcess as bused,'refso,reffhd,refpur,refsaleout' as referbtn,0  as refpaquo,0 as refcontract,0 as refquo,0 as refpreorder,0 as refimorder,bBillBlueOrder as refso,case when isalesbusinesstype=3 then 0 else bBillBlueSaleList end as reffhd,bBillBlueInvoice as refpur,0 as bmustbook\r\n\t,ISNULL(bbluebillsaleout,0) as refsaleout,0 as bsaleoutcreatebillptxs, 0 as bsaleoutcreatebillfqsk,0 as refcrmopp,0 as refmpforecastorder\r\n\t, 0 as refreturnapp,0 as refsalesdelivery\r\nfrom sabizflow inner join saletype on sabizflow.csalestypes=saletype.cstcode\r\nwhere bOpeningProcess=1 and isalesbusinesstype in (0,2,3)\r\nunion all \r\nselect iflowid,csalesprocessno as cprocessno,cSalesProcessDescribes as cflowname,case isalesbusinesstype when 0 then N'普通销售' when 1 then N'委托代销'  when 2 then N'分期收款' when 3 then N'直运销售' end as cbustype,cstcode,cstname,\r\n\t'SAM030404' as toolbarname, isnull(bBillRedManualInput,0) as baddnew,bReplyFinish as billafterlosssettle,bOrderMust as bmustso_ptxs ,bOrderMust as bmustso_wtdx,bOrderMust as bmustso_fqsk,bOrderMust as bmustso_zyxs,bPriceMust as bmustquo,bReplyMust as bneedsign,\r\n\tcase when bDeliveryOverOrder=0 then 1 else 0 end as boverorder,case when bBillOverDelivery=1 then 0 else 1 end as boverconsignment,iObtainPrice as costgettype,bSalesControl as bcusinvlimited,bReplyMust as bmustsign,bDeliveryList as bsacreat,\r\n\t'1' as breturnflag,cBillOrdinaryTemplate as defaultvtid,'13' as cardnum,bOpeningProcess as bused,'refso,reffhd,refpur,refsaleout' as referbtn,0  as refpaquo,0 as refcontract,0 as refquo,0 as refpreorder,0 as refimorder,bBillRedOrder as refso,case when isalesbusinesstype=3 then 0 else bbillredsalelist end as reffhd,bBillRedInvoice as refpur,0 as bmustbook\r\n\t,ISNULL(bredbillsaleout,0) as refsaleout,0 as bsaleoutcreatebillptxs, 0 as bsaleoutcreatebillfqsk,0 as refcrmopp,0 as refmpforecastorder\r\n\t, 0 as refreturnapp,0 as refsalesdelivery\r\nfrom sabizflow inner join saletype on sabizflow.csalestypes=saletype.cstcode\r\nwhere bOpeningProcess=1 and isalesbusinesstype in (0,2,3)\r\nunion all \r\nselect iflowid,csalesprocessno as cprocessno,cSalesProcessDescribes as cflowname,case isalesbusinesstype when 0 then N'普通销售' when 1 then N'委托代销'  when 2 then N'分期收款' when 3 then N'直运销售' end as cbustype,cstcode,cstname,\r\n\t'SAM030503' as toolbarname, 0 as baddnew,bReplyFinish as billafterlosssettle,bOrderMust as bmustso_ptxs ,bOrderMust as bmustso_wtdx,bOrderMust as bmustso_fqsk,bOrderMust as bmustso_zyxs,bPriceMust as bmustquo,bReplyMust as bneedsign,\r\n\tcase when bDeliveryOverOrder=0 then 1 else 0 end as boverorder,case when bBillOverDelivery=1 then 0 else 1 end as boverconsignment,iObtainPrice as costgettype,bSalesControl as bcusinvlimited,bReplyMust as bmustsign,bDeliveryList as bsacreat,\r\n\t'0' as breturnflag,cBillOrdinaryTemplate as defaultvtid,'02' as cardnum,bOpeningProcess as bused,'' as referbtn,0  as refpaquo,0 as refcontract,0 as refquo,0 as refpreorder,0 as refimorder,bBillBlueOrder as refso,0 as reffhd,bBillBlueInvoice as refpur,0 as bmustbook\r\n\t,ISNULL(bbluebillsaleout,0) as refsaleout,0 as bsaleoutcreatebillptxs,0 as bsaleoutcreatebillfqsk,0 as refcrmopp,0 as refmpforecastorder\r\n\t, 0 as refreturnapp,0 as refsalesdelivery\r\nfrom sabizflow inner join saletype on sabizflow.csalestypes=saletype.cstcode\r\nwhere bOpeningProcess=1 and isalesbusinesstype=1\r\nunion all \r\nselect iflowid,csalesprocessno as cprocessno,cSalesProcessDescribes as cflowname,case isalesbusinesstype when 0 then N'普通销售' when 1 then N'委托代销'  when 2 then N'分期收款' when 3 then N'直运销售' end as cbustype,cstcode,cstname,\r\n\t'SAM030504' as toolbarname, 0 as baddnew,bReplyFinish as billafterlosssettle,bOrderMust as bmustso_ptxs ,bOrderMust as bmustso_wtdx,bOrderMust as bmustso_fqsk,bOrderMust as bmustso_zyxs,bPriceMust as bmustquo,bReplyMust as bneedsign,\r\n\tcase when bDeliveryOverOrder=0 then 1 else 0 end as boverorder,case when bBillOverDelivery=1 then 0 else 1 end as boverconsignment,iObtainPrice as costgettype,bSalesControl as bcusinvlimited,bReplyMust as bmustsign,bDeliveryList as bsacreat,\r\n\t'1' as breturnflag,cBillOrdinaryTemplate as defaultvtid,'04' as cardnum,bOpeningProcess as bused,'' as referbtn,0  as refpaquo,0 as refcontract,0 as refquo,0 as refpreorder,0 as refimorder,bBillRedOrder as refso,0 as reffhd,bBillRedInvoice as refpur,0 as bmustbook\r\n\t,ISNULL(bredbillsaleout,0) as refsaleout,0 as bsaleoutcreatebillptxs,0 as bsaleoutcreatebillfqsk,0 as refcrmopp,0 as refmpforecastorder\r\n\t, 0 as refreturnapp,0 as refsalesdelivery\r\nfrom sabizflow inner join saletype on sabizflow.csalestypes=saletype.cstcode\r\nwhere bOpeningProcess=1  and isalesbusinesstype=1","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SA_BizFlow"},{"field":"Type","value":"View"}],"columns":[{"id":"column-284444","object_id":"column-284444","name":"iflowid","name_without_path":"iflowid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284445","object_id":"column-284445","name":"cprocessno","name_without_path":"cprocessno","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284446","object_id":"column-284446","name":"cflowname","name_without_path":"cflowname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284447","object_id":"column-284447","name":"cbustype","name_without_path":"cbustype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284448","object_id":"column-284448","name":"cstcode","name_without_path":"cstcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284449","object_id":"column-284449","name":"cstname","name_without_path":"cstname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284450","object_id":"column-284450","name":"toolbarname","name_without_path":"toolbarname","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284451","object_id":"column-284451","name":"baddnew","name_without_path":"baddnew","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284452","object_id":"column-284452","name":"billafterlosssettle","name_without_path":"billafterlosssettle","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284453","object_id":"column-284453","name":"bmustso_ptxs","name_without_path":"bmustso_ptxs","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284454","object_id":"column-284454","name":"bmustso_wtdx","name_without_path":"bmustso_wtdx","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284455","object_id":"column-284455","name":"bmustso_fqsk","name_without_path":"bmustso_fqsk","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284456","object_id":"column-284456","name":"bmustso_zyxs","name_without_path":"bmustso_zyxs","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284457","object_id":"column-284457","name":"bmustquo","name_without_path":"bmustquo","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284458","object_id":"column-284458","name":"bneedsign","name_without_path":"bneedsign","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284459","object_id":"column-284459","name":"boverorder","name_without_path":"boverorder","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284460","object_id":"column-284460","name":"boverconsignment","name_without_path":"boverconsignment","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284461","object_id":"column-284461","name":"costgettype","name_without_path":"costgettype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284462","object_id":"column-284462","name":"bcusinvlimited","name_without_path":"bcusinvlimited","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284463","object_id":"column-284463","name":"bmustsign","name_without_path":"bmustsign","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284464","object_id":"column-284464","name":"bsacreat","name_without_path":"bsacreat","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284465","object_id":"column-284465","name":"breturnflag","name_without_path":"breturnflag","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284466","object_id":"column-284466","name":"defaultvtid","name_without_path":"defaultvtid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284467","object_id":"column-284467","name":"cardnum","name_without_path":"cardnum","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"4","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284468","object_id":"column-284468","name":"bused","name_without_path":"bused","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284469","object_id":"column-284469","name":"referbtn","name_without_path":"referbtn","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"70","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284470","object_id":"column-284470","name":"refpaquo","name_without_path":"refpaquo","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284471","object_id":"column-284471","name":"refcontract","name_without_path":"refcontract","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284472","object_id":"column-284472","name":"refquo","name_without_path":"refquo","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284473","object_id":"column-284473","name":"refpreorder","name_without_path":"refpreorder","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284474","object_id":"column-284474","name":"refimorder","name_without_path":"refimorder","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284475","object_id":"column-284475","name":"refso","name_without_path":"refso","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284476","object_id":"column-284476","name":"reffhd","name_without_path":"reffhd","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284477","object_id":"column-284477","name":"refpur","name_without_path":"refpur","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284478","object_id":"column-284478","name":"bmustbook","name_without_path":"bmustbook","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284479","object_id":"column-284479","name":"refsaleout","name_without_path":"refsaleout","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284480","object_id":"column-284480","name":"bsaleoutcreatebillptxs","name_without_path":"bsaleoutcreatebillptxs","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284481","object_id":"column-284481","name":"bsaleoutcreatebillfqsk","name_without_path":"bsaleoutcreatebillfqsk","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284482","object_id":"column-284482","name":"refcrmopp","name_without_path":"refcrmopp","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284483","object_id":"column-284483","name":"refmpforecastorder","name_without_path":"refmpforecastorder","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284484","object_id":"column-284484","name":"refreturnapp","name_without_path":"refreturnapp","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284485","object_id":"column-284485","name":"refsalesdelivery","name_without_path":"refsalesdelivery","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};