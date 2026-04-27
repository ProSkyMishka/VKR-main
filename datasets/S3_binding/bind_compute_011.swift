import SwiftUI

struct Pairbcm011: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("bcm011-a+") { a += 1 }
            Button("bcm011-b+") { b += 1 }
        }
    }
}

struct ContentView: View {
    @State private var a = 1
    @State private var b = 2
    var body: some View {
        VStack {
            Text("bcm011-sum: \(a + b)").font(.headline)
            Text("bcm011-pair: a=\(a) b=\(b)")
            Pairbcm011(a: $a, b: $b)
        }
        .padding()
    }
}
