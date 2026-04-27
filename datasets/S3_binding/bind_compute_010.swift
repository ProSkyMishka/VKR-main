import SwiftUI

struct Pairbcm010: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("bcm010-a+") { a += 1 }
            Button("bcm010-b+") { b += 1 }
        }
    }
}

struct ContentView: View {
    @State private var a = 1
    @State private var b = 2
    var body: some View {
        VStack {
            Text("bcm010-sum: \(a + b)").font(.headline)
            Text("bcm010-pair: a=\(a) b=\(b)")
            Pairbcm010(a: $a, b: $b)
        }
        .padding()
    }
}
