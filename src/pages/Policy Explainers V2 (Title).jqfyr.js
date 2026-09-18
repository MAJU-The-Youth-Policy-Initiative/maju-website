// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

   $w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.author) {

          $w("#text48").show();

       } else {

          $w("#text48").collapse();

          $w("#text48").hide();

       }

    } );
   $w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.download) {

          $w("#button3").show();
          $w("#Section1Regular").show();
          
          $w("#section1").show();
          $w("#section2").show();
          $w("#section3").collapse();
          $w("#section3").hide();
                  

       } else {

          $w("#button3").collapse();
          $w("#button3").hide();
          $w("#Section1Regular").collapse();
          $w("#Section1Regular").hide();
          $w("#section1").collapse();
          $w("#section1").hide();
          $w("#section2").collapse();
          $w("#section2").hide();
          
          $w("#section3").show();
          

       }

    } );
   $w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.download) {

          $w("#button4").show();

       } else {

          $w("#button4").collapse();

          $w("#button4").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.head1) {

          $w("#text12").show();

       } else {

          $w("#text12").collapse();

          $w("#text12").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.subh1) {

          $w("#text13").show();

       } else {

          $w("#text13").collapse();

          $w("#text13").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.body1) {

          $w("#text14").show();

       } else {

          $w("#text14").collapse();

          $w("#text14").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.head2) {

          $w("#text17").show();

       } else {

          $w("#text17").collapse();

          $w("#text17").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.subh1) {

          $w("#text16").show();

       } else {

          $w("#text16").collapse();

          $w("#text16").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.body2) {

          $w("#text15").show();

       } else {

          $w("#text15").collapse();

          $w("#text15").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.head3) {

          $w("#text20").show();

       } else {

          $w("#text20").collapse();

          $w("#text20").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.subh3) {

          $w("#text19").show();

       } else {

          $w("#text19").collapse();

          $w("#text19").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.body3) {

          $w("#text18").show();

       } else {

          $w("#text18").collapse();

          $w("#text18").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.head4) {

          $w("#text23").show();

       } else {

          $w("#text23").collapse();

          $w("#text23").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.subh4) {

          $w("#text22").show();

       } else {

          $w("#text22").collapse();

          $w("#text22").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.body4) {

          $w("#text21").show();

       } else {

          $w("#text21").collapse();

          $w("#text21").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.head5) {

          $w("#text26").show();

       } else {

          $w("#text26").collapse();

          $w("#text26").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.subh5) {

          $w("#text25").show();

       } else {

          $w("#text25").collapse();

          $w("#text25").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.body5) {

          $w("#text24").show();

       } else {

          $w("#text24").collapse();

          $w("#text24").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.head6) {

          $w("#text29").show();

       } else {

          $w("#text29").collapse();

          $w("#text29").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.subh6) {

          $w("#text28").show();

       } else {

          $w("#text28").collapse();

          $w("#text28").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.body6) {

          $w("#text27").show();

       } else {

          $w("#text27").collapse();

          $w("#text27").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.head7) {

          $w("#text32").show();

       } else {

          $w("#text32").collapse();

          $w("#text32").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.subh7) {

          $w("#text31").show();

       } else {

          $w("#text31").collapse();

          $w("#text31").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.body7) {

          $w("#text30").show();

       } else {

          $w("#text30").collapse();

          $w("#text30").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.head8) {

          $w("#text35").show();

       } else {

          $w("#text35").collapse();

          $w("#text35").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.subh8) {

          $w("#text34").show();

       } else {

          $w("#text34").collapse();

          $w("#text34").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.body8) {

          $w("#text33").show();

       } else {

          $w("#text33").collapse();

          $w("#text33").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.head9) {

          $w("#text38").show();

       } else {

          $w("#text38").collapse();

          $w("#text38").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.subh9) {

          $w("#text37").show();

       } else {

          $w("#text37").collapse();

          $w("#text37").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.body9) {

          $w("#text36").show();

       } else {

          $w("#text36").collapse();

          $w("#text36").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.head10) {

          $w("#text41").show();

       } else {

          $w("#text41").collapse();

          $w("#text41").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.subh10) {

          $w("#text40").show();

       } else {

          $w("#text40").collapse();

          $w("#text40").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.body10) {

          $w("#text39").show();

       } else {

          $w("#text39").collapse();

          $w("#text39").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.head11) {

          $w("#text44").show();

       } else {

          $w("#text44").collapse();

          $w("#text44").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.subh11) {

          $w("#text43").show();

       } else {

          $w("#text43").collapse();

          $w("#text43").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.body11) {

          $w("#text42").show();

       } else {

          $w("#text42").collapse();

          $w("#text42").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.head12) {

          $w("#text56").show();

       } else {

          $w("#text56").collapse();

          $w("#text56").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.subh12) {

          $w("#text55").show();

       } else {

          $w("#text55").collapse();

          $w("#text55").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.body12) {

          $w("#text54").show();

       } else {

          $w("#text54").collapse();

          $w("#text54").hide();

       }

    } );
    $w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.header) {

          $w("#text61").show();

       } else {

          $w("#text61").collapse();

          $w("#text61").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.subh) {

          $w("#text60").show();

       } else {

          $w("#text60").collapse();

          $w("#text60").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.body) {

          $w("#text59").show();

       } else {

          $w("#text59").collapse();

          $w("#text59").hide();

       }

    } );
    $w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.head) {

          $w("#text64").show();

       } else {

          $w("#text64").collapse();

          $w("#text64").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.subhh) {

          $w("#text63").show();

       } else {

          $w("#text63").collapse();

          $w("#text63").hide();

       }

    } );
	$w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.bod) {

          $w("#text62").show();

       } else {

          $w("#text62").collapse();

          $w("#text62").hide();

       }

    } );
    $w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.head15) {

          $w("#text67").show();

       } else {

          $w("#text67").collapse();

          $w("#text67").hide();

       }

    } );
    $w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.subh15) {

          $w("#text66").show();

       } else {

          $w("#text66").collapse();

          $w("#text66").hide();

       }

    } );
    $w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.body15) {

          $w("#text65").show();

       } else {

          $w("#text65").collapse();

          $w("#text65").hide();

       }

    } );
    $w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.head16) {

          $w("#text70").show();

       } else {

          $w("#text70").collapse();

          $w("#text70").hide();

       }

    } );
    $w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.subh16) {

          $w("#text69").show();

       } else {

          $w("#text69").collapse();

          $w("#text69").hide();

       }

    } );
    $w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.body16) {

          $w("#text68").show();

       } else {

          $w("#text68").collapse();

          $w("#text68").hide();

       }

    } );
    $w("#dynamicDataset").onReady( () => { 

       let item = $w("#dynamicDataset").getCurrentItem(); 

       if (item.author) {

          $w("#text48").show();

       } else {

          $w("#text48").collapse();

          $w("#text48").hide();

       }

    } );
});