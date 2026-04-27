import SwiftUI

struct Pairbcm013: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("bcm013-a+") { a += 1 }
            Button("bcm013-b+") { b += 1 }
        }
    }
}

struct ContentView: View {
    @State private var a = 1
    @State private var b = 2
    var body: some View {
        VStack {
            Text("bcm013-sum: \(a + b)").font(.headline)
            Text("bcm013-pair: a=\(a) b=\(b)")
            Pairbcm013(a: $a, b: $b)
        }
        .padding()
    }
}
