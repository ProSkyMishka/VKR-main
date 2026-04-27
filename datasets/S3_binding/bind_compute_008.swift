import SwiftUI

struct Pairbcm008: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("bcm008-a+") { a += 1 }
            Button("bcm008-b+") { b += 1 }
        }
    }
}

struct ContentView: View {
    @State private var a = 1
    @State private var b = 2
    var body: some View {
        VStack {
            Text("bcm008-sum: \(a + b)").font(.headline)
            Text("bcm008-pair: a=\(a) b=\(b)")
            Pairbcm008(a: $a, b: $b)
        }
        .padding()
    }
}
