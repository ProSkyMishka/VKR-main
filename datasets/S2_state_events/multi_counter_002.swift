import SwiftUI

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    @State private var c = 0

    var body: some View {
        VStack(spacing: 8) {
            Text("mc002-a: \(a)")
            Text("mc002-b: \(b)")
            Text("mc002-c: \(c)")
            HStack {
                Button("mc002-incA") { a += 1 }
                Button("mc002-incB") { b += 2 }
                Button("mc002-incC") { c += 3 }
            }
            HStack {
                Button("mc002-rstA") { a = 0 }
                Button("mc002-rstB") { b = 0 }
                Button("mc002-rstC") { c = 0 }
            }
        }
        .padding()
    }
}
