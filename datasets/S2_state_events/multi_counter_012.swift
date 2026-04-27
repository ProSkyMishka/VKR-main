import SwiftUI

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    @State private var c = 0

    var body: some View {
        VStack(spacing: 8) {
            Text("mc012-a: \(a)")
            Text("mc012-b: \(b)")
            Text("mc012-c: \(c)")
            HStack {
                Button("mc012-incA") { a += 1 }
                Button("mc012-incB") { b += 2 }
                Button("mc012-incC") { c += 3 }
            }
            HStack {
                Button("mc012-rstA") { a = 0 }
                Button("mc012-rstB") { b = 0 }
                Button("mc012-rstC") { c = 0 }
            }
        }
        .padding()
    }
}
