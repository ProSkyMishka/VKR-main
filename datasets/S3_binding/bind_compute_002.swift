import SwiftUI

struct Pairbcm002: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("bcm002-a+") { a += 1 }
            Button("bcm002-b+") { b += 1 }
        }
    }
}

struct ContentView: View {
    @State private var a = 1
    @State private var b = 2
    var body: some View {
        VStack {
            Text("bcm002-sum: \(a + b)").font(.headline)
            Text("bcm002-pair: a=\(a) b=\(b)")
            Pairbcm002(a: $a, b: $b)
        }
        .padding()
    }
}
