import SwiftUI

struct Pairbcm001: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("bcm001-a+") { a += 1 }
            Button("bcm001-b+") { b += 1 }
        }
    }
}

struct ContentView: View {
    @State private var a = 1
    @State private var b = 2
    var body: some View {
        VStack {
            Text("bcm001-sum: \(a + b)").font(.headline)
            Text("bcm001-pair: a=\(a) b=\(b)")
            Pairbcm001(a: $a, b: $b)
        }
        .padding()
    }
}
