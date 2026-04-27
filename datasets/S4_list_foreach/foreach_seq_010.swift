import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(0..<14, id: \.self) { k in
                Text("fs010-row \(k)")
            }
        }
    }
}
