import SwiftUI

struct Pairbcm007: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("bcm007-a+") { a += 1 }
            Button("bcm007-b+") { b += 1 }
        }
    }
}

struct ContentView: View {
    @State private var a = 1
    @State private var b = 2
    var body: some View {
        VStack {
            Text("bcm007-sum: \(a + b)").font(.headline)
            Text("bcm007-pair: a=\(a) b=\(b)")
            Pairbcm007(a: $a, b: $b)
        }
        .padding()
    }
}
