import SwiftUI

struct Pairbcm005: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("bcm005-a+") { a += 1 }
            Button("bcm005-b+") { b += 1 }
        }
    }
}

struct ContentView: View {
    @State private var a = 1
    @State private var b = 2
    var body: some View {
        VStack {
            Text("bcm005-sum: \(a + b)").font(.headline)
            Text("bcm005-pair: a=\(a) b=\(b)")
            Pairbcm005(a: $a, b: $b)
        }
        .padding()
    }
}
